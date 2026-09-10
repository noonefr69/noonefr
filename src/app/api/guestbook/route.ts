import dbConnect from "@/lib/db";
import { Guestbook } from "@/schema/guest-book";

export async function GET() {
  try {
    await dbConnect();

    const entries = await Guestbook.find({}).sort({ createdAt: -1 }).lean();

    return new Response(JSON.stringify(entries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
