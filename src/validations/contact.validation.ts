import { z } from "zod";

export const contactSchemaValidation = z.object({
  name: z
  .string({ required_error: "user name is required" })
  .trim()
  .min(3, "user name must be at least 3 character")
  .max(30, "user name must not be more than 30 character"),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email()
    // TODO: ADD EMAIL REGEX HERE
    // .regex()
    .min(3, "email must be at least 3 character")
    .max(30, "email must not be more than 30 character"),
  message:z
  .string({ required_error: "message is required" })
  .trim()
  .min(3, "message must be at least 3 character")
  .max(30, "message must not be more than 30 character"),
})