


import { Types } from 'mongoose';

export interface IRentalHouse {
  location: string;
  description: string;
  rentAmount: number;
  numberOfBedrooms: number || null;
  numberOfBathrooms?: number;
  images: string[];
  landlordId: Types.ObjectId;
  availableFrom?: Date;
  isFurnished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
