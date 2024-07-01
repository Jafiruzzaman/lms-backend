import mongoose from "mongoose";
import { Email } from "../interface/email.interface";
import { emailSchema } from "../schema/email.schema";
export default mongoose.model<Email>("Email", emailSchema);