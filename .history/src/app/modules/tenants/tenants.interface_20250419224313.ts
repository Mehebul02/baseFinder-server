import { Types } from 'mongoose';

export type RentalRequestStatus = 'pending' | 'approved' | 'rejected';
export type PaymentStatus = 'unpaid' | 'paid';

export interface IRentalRequest {
   _id?: Types.ObjectId;
   house: Types.ObjectId;
   tenant: Types.ObjectId; 
   status?: RentalRequestStatus; 
   landlordPhoneNumber?: string | null; 
   paymentStatus?: PaymentStatus; 
   message?: string;
   requestDate?: Date;
   createdAt?: Date;
   updatedAt?: Date;
}
