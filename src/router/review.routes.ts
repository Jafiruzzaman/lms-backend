import { Router } from "express";
import { reviewController } from "../controller/review.controller";
import { authenticate } from "../middlewares/authenticate";
const reviewRoutes = Router();
reviewRoutes.route("/reviews").post(authenticate, reviewController);
export { reviewRoutes };