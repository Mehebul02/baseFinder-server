


import { Types } from 'mongoose';

export interface IRentalHouse {
  location: string;
  description: string;
  rentAmount: number;
  numberOfBedrooms: number;
  numberOfBathrooms?: number;
  images: string[];
  landlordId: Types.ObjectId;
  availableFrom?: Date;
  isFurnished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
