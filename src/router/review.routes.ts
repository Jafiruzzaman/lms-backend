import { Router } from "express";
import { reviewController } from "../controller/review.controller";
const reviewRoutes = Router();
reviewRoutes.route("/reviews").post(reviewController);
export { reviewRoutes };