import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { RentalHouseService } from "./landlord.service";



const registerUser = catchAsync(async (req: Request, res: Response) => {

    const result = await RentalHouseService.createRentalHouse(
       req.body
    );


    sendResponse(res, {
       statusCode: StatusCodes.OK,
       success: true,
       message: 'Rental house created successfully!',
       data:result
    //    data: {
    //       accessToken,
    //    },
    });
 });


 export const RentalHouseController = {
    createRentalHouse,
    getAllRentalHouses,
    getRentalHouseById,
    updateRentalHouse,
    deleteRentalHouse,
  };
