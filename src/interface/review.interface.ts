import { User } from "./user.interface";

export interface Review {
  _id: string;
  userId: User;
  name: string;
  image: string;
  email: string;
  review: string;
  createdAt: Date;
  updatedAt: Date;
}