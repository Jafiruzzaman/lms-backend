import { Router } from "express";
import { contactController } from "../controller/contact.controller";
import { authenticate } from '../middlewares/authenticate';
import { validate } from "../middlewares/validate";
import { contactSchemaValidation } from "../validations/contact.validation";
const contactRoutes = Router();
contactRoutes.route("/contact").post(validate(contactSchemaValidation),authenticate,contactController)
export { contactRoutes };
