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
