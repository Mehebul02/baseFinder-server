import { Types } from 'mongoose';

export type RentalRequestStatus = 'pending' | 'approved' | 'rejected';
export type PaymentStatus = 'unpaid' | 'paid';

export interface IRentalRequest {
   _id?: Types.ObjectId;
   house: Types.ObjectId;
   tenant: Types.ObjectId; /
   status?: RentalRequestStatus; // default: pending
   landlordPhoneNumber?: string | null; // required if approved
   paymentStatus?: PaymentStatus; // default: unpaid
   message?: string;
   requestDate?: Date;
   createdAt?: Date;
   updatedAt?: Date;
}
