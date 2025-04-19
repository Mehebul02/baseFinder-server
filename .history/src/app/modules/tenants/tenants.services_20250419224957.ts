import { IRentalRequest } from "./tenants.interface";
import { RentalRequestHouseModel } from "./tenants.model";



const createRentalRequest  =async (payload:IRentalRequest)=>{
    const isExit = await RentalRequestHouseModel.findOne(
        {
            house: payload.house,
            tenant: payload.tenant,
        }
    )
    if(isExit)
}