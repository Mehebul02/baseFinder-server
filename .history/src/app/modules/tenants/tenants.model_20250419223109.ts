import { Schema } from "mongoose";



const rentalRequestSchema  = new Schema({
    house:{
        type:Schema.Types.ObjectId
    }
})