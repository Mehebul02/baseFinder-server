import { z } from "zod";

const userValidationSchema = z.object({
    body: z.object({
       email: z.string().email('Invalid email address'),
       password: z.string().min(6, 'Password must be at least 6 characters long'),
       name: z.string().min(1, 'Name is required'),
       role: z.enum([UserRole.USER, UserRole.ADMIN]).default(UserRole.USER), // Match enum values in your code
       clientInfo: clientInfoSchema // Nested schema for client info
    })
 });
 