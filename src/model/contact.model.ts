import mongoose from "mongoose";
import { Contact } from "../interface/contact.interface";
import { contactSchema } from "../schema/contact.schema";
export default mongoose.model<Contact>("Contact", contactSchema);