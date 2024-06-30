import dotenv from "dotenv";
dotenv.config();
const _config = {
  port: process.env.PORT || 5000,
  cors_origin: process.env.CORS_ORIGIN,
  mongodb_uri: process.env.MONGODB_URI as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
  access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
  refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRY,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_cloud_api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  cloudinary_cloud_api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
  node_env: process.env.NODE_ENV,
  limit: process.env.LIMIT,
};
export const config = Object.freeze(_config);