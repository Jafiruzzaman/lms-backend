import { Router } from "express";
import { adminController } from "../admin/admin";
import { isAdmin } from "../admin/isAdmin";
import { authenticate } from "../middlewares/authenticate";
const adminRoutes = Router();
// routes
adminRoutes.route("/admin").get(authenticate, isAdmin, adminController);
// export
export { adminRoutes };