import mongoose from "mongoose";
import { Review } from "../interface/review.interface";
import { reviewSchema } from "../schema/review.schema";
export default mongoose.model<Review>("Review", reviewSchema);