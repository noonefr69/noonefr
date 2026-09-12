import { Schema, model, models } from "mongoose";

const guestbookschema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    human: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const Guestbook =
  models.Guestbook || model("Guestbook", guestbookschema);
