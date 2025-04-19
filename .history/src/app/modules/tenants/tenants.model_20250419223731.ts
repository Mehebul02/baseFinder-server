import { model, Schema } from "mongoose";
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
     landlordPhoneNumber: {
        type: String,
        default: null, // only available if approved
     },
     paymentStatus: {
        type: String,
        enum: ['unpaid', 'paid'],
        default: 'unpaid',
     },
     message: {
        type: String,
        default: '', // tenant can add a message while requesting
     },
     requestDate: {
        type: Date,
        default: Date.now,
     },

},{
    timestamps:true
})

export default mongoos.model('RentalRequest', rentalRequestSchema);

export const RentalRequestHouseModel = model('RentalHouse', rentalHouseSchema);