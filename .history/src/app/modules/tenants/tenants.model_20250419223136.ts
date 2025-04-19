import { Schema } from "mongoose";
import { ref } from "process";



const rentalRequestSchema = new Schema({
    house: {
        type: Schema.Types.ObjectId,
        ref: "RentalHouse",
        required: true
    }
})