import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
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

// routes

// export app
export { app };