import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";

const courseRoutes = Router();
// course CRUD
courseRoutes.route("/create-course").post(authenticate);
courseRoutes.route("/get-course").get(authenticate);
courseRoutes.route("/get-all-course").get(authenticate);
courseRoutes.route("/update-course").put(authenticate);
courseRoutes.route("/delete-course").delete(authenticate);
// export
export { courseRoutes };