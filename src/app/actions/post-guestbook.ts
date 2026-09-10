"use server";

import { z } from "zod";
import dbConnect from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Guestbook } from "@/schema/guest-book";

const postGuestbookSchema = z.object({
  username: z.string().min(1).max(15),
  message: z.string().min(1).max(150),
  human: z.boolean(),
});

export type ActionResult = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function postGuestBook(input: unknown): Promise<ActionResult> {
  const validatedData = postGuestbookSchema.safeParse(input);

  if (!validatedData.success) {
    return {
      success: false,
      error: "Invalid data submitted.",
    };
  }

  try {
    await dbConnect();

    await Guestbook.create({
      username: validatedData.data.username,
      message: validatedData.data.message,
      human: validatedData.data.human,
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Message created successfully in guestbook.",
    };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Something went wrong." };
  }
}