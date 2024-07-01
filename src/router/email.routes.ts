import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { emailController } from "../controller/email.controller";
const emailRoutes = Router();
emailRoutes.route("/subscriptions").post(authenticate, emailController);

export { emailRoutes };