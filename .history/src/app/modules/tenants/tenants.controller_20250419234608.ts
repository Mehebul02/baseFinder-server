import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { RentalRequestService } from "./tenants.services";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createRentalRequest  = catchAsync(async(req:Request, res:Response)=>{
    const payload = req.body;
    const result = await RentalRequestService.createRentalRequest(payload);
    sendResponse(res,{
        statusCode:StatusCodes.CREATED,
        success:true,
        message:"Rental request created successfully!",
        data:result,
    })
})

export const getTenantRequests = catchAsync(async (req: Request, res: Response) => {
    const result = await RentalRequestService.();
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'All rental requests retrieved successfully!',
      data: result,
    });
  });
  