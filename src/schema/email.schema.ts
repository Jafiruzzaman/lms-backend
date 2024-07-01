import { Schema } from "mongoose";
import { Email } from "../interface/email.interface";
export const emailSchema = new Schema<Email>(
  {
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
