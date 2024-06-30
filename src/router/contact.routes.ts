import { Router } from "express";
import { contactController } from "../controller/contact.controller";
import { authenticate } from '../middlewares/authenticate';
import { validate } from "../middlewares/validate";
const contactRoutes = Router();
contactRoutes.route("/contact").post(validate,authenticate,contactController)
export { contactRoutes };
