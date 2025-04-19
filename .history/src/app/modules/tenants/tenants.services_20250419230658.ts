import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { IRentalRequest, RentalRequestStatus } from "./tenants.interface";
import { RentalRequestHouseModel } from "./tenants.model";



const createRentalRequest = async (payload: IRentalRequest) => {
    const isExit = await RentalRequestHouseModel.findOne(
        {
            house: payload.house,
            tenant: payload.tenant,
        }
    )
    if (isExit) {
        throw new AppError(StatusCodes.CONFLICT, 'You already requested this house.');
    }
    const result = await RentalRequestHouseModel.create(payload);
    return result;
}

const getTenantRequests = async () => {
    const result = await RentalRequestHouseModel.find().populate('house').populate('tenant')
    return result
}

const updateRequestStatus = async(id:string,status:RentalRequestStatus, landlordPhoneNumber?: string)=>{
    const request = await RentalRequestHouseModel.findById(id)

    if(!request){
        throw new AppError(StatusCodes.NOT_FOUND, 'Rental request not found');
    }
    // if(request.status !=='pending'){
    //     throw new AppError(StatusCodes.BAD_REQUEST, "Rental request is already processed")
    // }
    request.status = status;
    if (status === 'approved') {
        if (status === 'approved' && !landlordPhoneNumber) {
           throw new AppError(StatusCodes.BAD_REQUEST, 'Phone number is required when approved');
        }
        request.landlordPhoneNumber = landlordPhoneNumber || '';
     } else {
        request.landlordPhoneNumber = null |;
     }


}


export const RentalRequestService = {
    createRentalRequest,
    // getTenantRequests,
    // updateRequestStatus,
    // updatePaymentStatus,
};