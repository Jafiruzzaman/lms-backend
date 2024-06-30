import { z } from "zod";
// const emailRegex = RegExp([/])
export const signUpSchema = z.object({
  name:z
  .string({required_error:"user name is required"})
  .trim()
  .min(3,"user name must be at least 3 character")
  .max(30,"user name must not be more than 30 character"),

  email:z
  .string({required_error:"user name is required"})
  .trim()
  .email()
  // TODO: ADD EMAIL REGEX HERE
  // .regex()
  .min(3,"user name must be at least 3 character")
  .max(30,"user name must not be more than 30 character"),

  password:z
  .string({required_error:"password is required"})
  .trim()
  .min(8,"password must be at least 8 character")
  .max(80,"password must not be more than 80 character"),
})