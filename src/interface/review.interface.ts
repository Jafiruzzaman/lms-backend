import { User } from "./user.interface";

export interface Review {
  _id: string;
  name: User;
  image: string;
  email: string;
  review:string,
  createdAt: Date;
  updatedAt: Date;
}