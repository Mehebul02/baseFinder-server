import { Schema } from "mongoose";
import { UserRole } from "./user.interface";




const userSchema = new Schema(
    {
        name: {
           type: String,
           required: true,
        },
        email: {
           type: String,
           required: true,
           unique: true,
           lowercase: true,
        },
        password: {
           type: String,
           required: true,
        },
        role: {
           type: String,
           enum: [UserRole.ADMIN, UserRole.LANDLORD, UserRole.TENANT],
           default: UserRole.LANDLORD,
        },
        hasShop: {
           type: Boolean,
           default: false, 
        },
        clientInfo: {
           device: {
              type: String,
              enum: ['pc', 'mobile'],
              required: true,
           },
           browser: {
              type: String,
              required: true,
           },
           ipAddress: {
              type: String,
              required: true,
           },
           pcName: {
              type: String,
           },
           os: {
              type: String,
           },
           userAgent: {
              type: String,
           },
        },
        lastLogin: {
           type: Date,
           default: Date.now,
        },
        isActive: {
           type: Boolean,
           default: true,
        },
        otpToken: {
           type: String,
           default: null
        },
     },
     {
        timestamps: true,
     }
)