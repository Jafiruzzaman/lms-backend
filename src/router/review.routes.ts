import { Router } from "express";
const reviewRoutes = Router();
reviewRoutes.route("/reviews").post();
export { reviewRoutes };