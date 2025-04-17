import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";



const registerUser = catchAsync(async (req: Request, res: Response) => {

    const result = await Renta.registerUser(
       req.body
    );


    sendResponse(res, {
       statusCode: StatusCodes.OK,
       success: true,
       message: 'User registration completed successfully!',
       data:result
    //    data: {
    //       accessToken,
    //    },
    });
 });
