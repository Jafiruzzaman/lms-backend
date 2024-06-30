import jwt from 'jsonwebtoken';
import { config } from '../config/config';
// generateAccessToken
export const generateAccessToken = async function (user: any) {
  jwt.sign(
    {
      userId:user._id,
      username:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      roles:user.roles,
    },
    config.access_token_secret,
    {
      expiresIn: config.access_token_expiry,
    }
  );
};
// generateRefreshToken
export const generateRefreshToken = async function (user: any) {
  jwt.sign(
    {
      userId:user._id,
    },
    config.refresh_token_secret,
    {
      expiresIn: config.refresh_token_expiry,
    }
  );
};