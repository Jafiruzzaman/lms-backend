import { z } from "zod";
// const emailRegex = RegExp([/])
// loginSchema
export const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email()
    // TODO: ADD EMAIL REGEX HERE
    // .regex()
    .min(3, "email must be at least 3 character")
    .max(30, "email must not be more than 30 character"),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, "password must be at least 8 character")
    .max(80, "password must not be more than 80 character"),
});
// signUpSchema
export const signUpSchema = loginSchema.extend({
  name: z
    .string({ required_error: "user name is required" })
    .trim()
    .min(3, "user name must be at least 3 character")
    .max(30, "user name must not be more than 30 character"),
});