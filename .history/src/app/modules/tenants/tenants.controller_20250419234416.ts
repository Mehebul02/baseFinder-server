import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const createRentalRequest  = catchAsync(async(req:Request, res:Response)=>{
    const payload = req.body;
    const result = await Re
})