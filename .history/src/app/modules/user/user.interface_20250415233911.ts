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
    clientInfo: {
       device: 'pc' | 'mobile'; // Device type
       browser: string; // Browser name
       ipAddress: string; // User IP address
       pcName?: string; // Optional PC name
       os?: string; // Optional OS name (Windows, MacOS, etc.)
       userAgent?: string; // Optional user agent string
    };
    lastLogin: Date;
    isActive: boolean;
    otpToken?: string | null;
    createdAt: Date;
    updatedAt: Date;
 }