import { Schema } from "mongoose";
import { Course } from "../interface/course.interface";
export const courseSchema = new Schema<Course>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    courseImage: {
      type: String,
      required: true,
      max: 3,
    },
    estimatedPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    courseType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);