export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  roles: string;
  profile: string;
  refreshToken:string,
  createdAt: Date;
  updatedAt: Date;
}