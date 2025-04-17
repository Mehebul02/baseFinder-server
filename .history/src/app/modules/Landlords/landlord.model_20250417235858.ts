import { Schema, model } from "mongoose";

const rentalHouseSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    rentAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    numberOfBedrooms: {
      type: Number,
      required: true,
      min: 1,
    },
    numberOfBathrooms: {
      type: Number,
      required: false,
      min: 1,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "At least one image is required.",
      },
    },
    landlordId: {
      type: Schema.Types.ObjectId,
      ref: "User", // assuming your users collection is named "User"
      required: true,
    },
    availableFrom: {
      type: Date,
      required: false,
    },
    isFurnished: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // auto-manages createdAt and updatedAt
  }
);

// Optional: You can export the model like this
// export const RentalHouse = model('RentalHouse', rentalHouseSchema);

export default rentalHouseSchema;
