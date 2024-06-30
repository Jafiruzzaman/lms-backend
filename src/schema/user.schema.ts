import { Schema } from "mongoose";
import { User } from "../interface/user.interface";
export const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profile: {
      type: String,
    },
    roles: {
      type: String,
      required: true,
      default: "students",
    },
  },
  {
    timestamps: true,
  }
);