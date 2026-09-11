"use client";
import "react-activity-calendar/tooltips.css";
import { Spinner } from "@/components/ui/spinner";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityCalendar } from "react-activity-calendar";

const LIGHT_COLORS = ["#ece7df", "#c0d0c8", "#91b5a4", "#71998b", "#5a8a82"];

const DARK_COLORS = ["#2a2726", "#29443b", "#315e50", "#427565", "#5a8a82"];

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};
export default function GitHubContainer() {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const year = String(currentYear);
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/github?year=${year}`);
        const result: Activity[] = await res.json();
        const pad = (n: number) => n.toString().padStart(2, "0");
        const today = new Date();
        const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
        const cutoff = new Date();
        cutoff.setMonth(cutoff.getMonth() - 6);
        const cutoffStr = `${cutoff.getFullYear()}-${pad(cutoff.getMonth() + 1)}-${pad(cutoff.getDate())}`;
        const filtered = result.filter(
          (activity) => activity.date >= cutoffStr && activity.date <= todayStr,
        );
        setData(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [year]);

  return (
    <>
      <Card className="bg-transparent p-0 px-4 relative min-w-0 overflow-visible flex-1 min-h-56 justify-center ">
        <CardContent className="p-0 flex items-center justify-center">
          {loading ? (
            <Spinner className="size-10" />
          ) : (
            <>
              <ActivityCalendar
                data={data}
                theme={{
                  light: LIGHT_COLORS,
                  dark: DARK_COLORS,
                }}
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                tooltips={{
                  activity: {
                    text: ({ level, date }) =>
                      `${level} activities on ${new Date(date).toLocaleDateString("en-US")}`,
                    placement: "top",
                    offset: 6,
                    hoverRestMs: 300,
                    transitionStyles: {
                      duration: 100,
                      common: { fontFamily: "monospace" },
                    },
                    withArrow: true,
                  },
                }}
              />
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
