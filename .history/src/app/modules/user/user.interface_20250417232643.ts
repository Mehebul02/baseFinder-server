import { Model } from "mongoose";

export enum UserRole {
    ADMIN = 'admin',
    LANDLORD = 'landlord',
    TENANT = 'tenant'
}


// User Schema Definition
export interface IUser extends Document {
    email: string;
    password: string;
    
    name: string;
    role: UserRole;
    lastLogin: Date;
    isActive: boolean;
    otpToken?: string | null;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface UserModel extends Model<IUser> {
    //instance methods for checking if passwords are matched
    isPasswordMatched(
       plainTextPassword: string,
       hashedPassword: string
    ): Promise<boolean>;
    isUserExistsByEmail(id: string): Promise<IUser>;
    checkUserExist(userId: string): Promise<IUser>;
 }
 