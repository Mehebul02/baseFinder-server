import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { IRentalRequest } from "./tenants.interface";
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



export const RentalRequestService = {
    createRentalRequest,
    // getTenantRequests,
    // updateRequestStatus,
    // updatePaymentStatus,
};