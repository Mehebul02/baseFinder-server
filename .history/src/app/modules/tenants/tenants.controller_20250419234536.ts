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
        
    })
})