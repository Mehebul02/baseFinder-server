import { Schema } from "mongoose";




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
        rentA
    }
)