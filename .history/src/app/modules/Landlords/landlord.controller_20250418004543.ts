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

  const updateRentalHouse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RentalHouseService.updateRentalHouse(id, req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rental house updated successfully!',
      data: result,
    });
  });
  
  

 export const RentalHouseController = {
    createRentalHouse,
    getAllRentalHouses,
    updateRentalHouse
  
  };
