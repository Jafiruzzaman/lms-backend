import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { createCourse, getCourse } from "../controller/course.controller";

const courseRoutes = Router();
// course CRUD
courseRoutes.route("/create-course").post(authenticate,createCourse);
courseRoutes.route("/get-course").get(authenticate,getCourse);
courseRoutes.route("/get-all-course").get(authenticate);
courseRoutes.route("/update-course").put(authenticate);
courseRoutes.route("/delete-course").delete(authenticate);
// export
export { courseRoutes };