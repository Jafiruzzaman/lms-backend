import { Schema } from "mongoose";
import { Review } from "../interface/review.interface";
export const reviewSchema = new Schema<Review>(
  {
    name: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);