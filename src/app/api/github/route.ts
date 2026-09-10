import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Helper to calculate the activity level (0-4) based on commit count
function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Define types for the GitHub GraphQL response
interface GitHubContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubGraphQLResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    } | null;
  };
  errors?: { message: string }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year") || new Date().getFullYear().toString();

  // GitHub GraphQL requires specific DateTime formats
  const start = `${year}-01-01T00:00:00Z`;
  const end = `${year}-12-31T23:59:59Z`;

  const query = `
    query($userName: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $userName) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { userName: GITHUB_USERNAME, from: start, to: end },
      }),
      // Cache the response for 24 hours to avoid hitting GitHub API rate limits
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      const errorText = await res.text();

      console.error("GitHub API error:", res.status, errorText);

      return NextResponse.json(
        {
          error: errorText,
          status: res.status,
        },
        { status: res.status },
      );
    }

    const json = (await res.json()) as GitHubGraphQLResponse;

    if (json.errors) {
      return NextResponse.json(
        { error: json.errors[0].message },
        { status: 400 },
      );
    }

    // Flatten the weeks into a single array of days safely
    const weeks =
      json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ??
      [];
    const days = weeks.flatMap((week) => week.contributionDays);

    // Map to the format required by react-activity-calendar
    const data = days.map((day) => ({
      date: day.date.split("T")[0], // "2024-01-01T00:00:00Z" -> "2024-01-01"
      count: day.contributionCount,
      level: getLevel(day.contributionCount),
    }));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" + error },
      { status: 500 },
    );
  }
}
