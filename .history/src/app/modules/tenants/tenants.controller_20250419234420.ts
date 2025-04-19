import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { RentalRequestService } from "./tenants.services";

const createRentalRequest  = catchAsync(async(req:Request, res:Response)=>{
    const payload = req.body;
    const result = await RentalRequestService.createRentalRequest
})