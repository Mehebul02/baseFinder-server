import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { RentalHouseService } from "./landlord.service";



const createRentalHouse = catchAsync(async (req: Request, res: Response) => {

    const result = await RentalHouseService.createRentalHouse(
       req.body
    );
    sendResponse(res, {
       statusCode: StatusCodes.OK,
       success: true,
       message: 'Rental house created successfully!',
       data:result
    
    });
 });


 const getAllRentalHouses = catchAsync(async (req: Request, res: Response) => {
    const result = await RentalHouseService.getAllRentalHouses();
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Rental houses retrieved successfully!',
      data: result,
    });
  });
  

 export const RentalHouseController = {
    createRentalHouse,
    getAllRentalHouses
  
  };
