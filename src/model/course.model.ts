import mongoose from "mongoose";
import { Course } from "../interface/course.interface";
import { courseSchema } from "../schema/course.schema";
export default mongoose.model<Course>("Course", courseSchema);