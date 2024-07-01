import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
import { globalErrorHandler } from "./utils/globalErrorHandler";
import { userRoutes } from "./router/user.routes";
import { courseRoutes } from "./router/course.routes";
import { contactRoutes } from "./router/contact.routes";
import { reviewRoutes } from "./router/review.routes";
import { adminRoutes } from "./router/admin.routes";
import { emailRoutes } from "./router/email.routes";
const app = express();
// express json configuration
app.use(
  express.json({
    limit: config.limit,
  })
);
// express urlencoded configuration
app.use(
  express.urlencoded({
    limit: config.limit,
    extended: true,
  })
);
// use public as a localStorage
app.use(express.static("public"));
// cors configuration
app.use(
  cors({
    origin: config.cors_origin,
    credentials: true,
    methods: "GET POST PATCH PUT DEL HEAD",
  })
);
// cookie-parser
app.use(cookieParser());

// globalErrorHandler
app.use(globalErrorHandler);
// routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", adminRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/users", reviewRoutes);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", emailRoutes);
// export app
export { app };