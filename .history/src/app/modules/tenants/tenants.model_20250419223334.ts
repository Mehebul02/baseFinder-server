import { Schema } from "mongoose";
import { ref } from "process";



const rentalRequestSchema = new Schema({
    house: {
        type: Schema.Types.ObjectId,
        ref: "RentalHouse",
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
     },

})