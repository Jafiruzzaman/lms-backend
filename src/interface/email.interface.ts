import { User } from "./user.interface";
export interface Email {
  _id: String;
  userInfo: User;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
