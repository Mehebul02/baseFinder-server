import { z } from 'zod';
import mongoose from 'mongoose';

const isValidObjectId = (val: string) => mongoose.Types.ObjectId.isValid(val);

// ✅ Create Rental Request (Tenant)
export const createRentalRequestZodSchema = z.object({
   body: z.object({
      house: z
         .string()
         .refine(isValidObjectId, {
            message: 'Invalid house ID',
         }),
      message: z.string().max(500, 'Message can be up to 500 characters').optional(),
   }),
});


// export const updateRentalRequestStatusZodSchema = z.object({
//     body: z.object({
//        status: z.enum(['approved', 'rejected']),
//        landlordPhoneNumber: z
//           .string()
//           .regex(/^01[3-9]\d{8}$/, 'Invalid Bangladeshi phone number')
//           .optional()
//           .refine((val, ctx) => {
//              if (ctx?.parent?.status === 'approved' && !val) {
//                 return false;
//              }
//              return true;
//           }, {
//              message: 'Phone number is required when request is approved',
//           }),
//     }),
//  });
 
 export const updatePaymentStatusZodSchema = z.object({
    body: z.object({
       paymentStatus: z.enum(['unpaid', 'paid']),
    }),
 });
 