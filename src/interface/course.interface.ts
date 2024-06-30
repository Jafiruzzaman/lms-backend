import { User } from "./user.interface"
export interface Course{
  _id:string,
  title:string,
  description:string,
  estimatedPrice:number,
  discountPrice:number
  courseImage:string
  author:User,
  courseType:string
  createdAt: string;
  updatedAt: string;
}