


import { Types } from 'mongoose';

export interface IRentalHouse {
  location: string;
  description: string;
  rentAmount: number;
  numberOfBedrooms: number | null | undefined;
  numberOfBathrooms?: number | null | undefined;
  images: string[];
  landlordId: Types.ObjectId;
  availableFrom?: Date | NativeDate | null | undefined;
  isFurnished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IJwtPayload {
    userId: string;
    name: string;
    email: string;
    hasShop: boolean;
    role: UserRole;
    isActive: boolean;
  }
  
