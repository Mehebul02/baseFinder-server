import { z } from "zod";

const rentalHouseValidationSchema = z.object({
  body: z.object({
    location: z.string().min(1, 'Location is required'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    rentAmount: z.number({ invalid_type_error: 'Rent amount must be a number' }).min(0, 'Rent amount must be positive'),
    numberOfBedrooms: z.number({ invalid_type_error: 'Number of bedrooms must be a number' }).min(1, 'At least 1 bedroom is required'),
    images: z.array(z.string().url('Each image must be a valid URL')).min(1, 'At least one image is required'),
    landlordId: z.string().min(1, 'Landlord ID is required'),
    availableFrom: z.string().optional(), 
    isFurnished: z.boolean().optional(), 
    numberOfBathrooms: z.number().min(1, 'At least 1 bathroom is required').optional(), // optional
  }),
});

export const RentalHouseValidation = {
  rentalHouseValidationSchema,
};
