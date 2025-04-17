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
    hasShop: boolean;
  
    lastLogin: Date;
    isActive: boolean;
    otpToken?: string | null;
    createdAt: Date;
    updatedAt: Date;
 }