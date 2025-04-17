import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";



const registerUser = catchAsync(async (req: Request, res: Response) => {

    const result = await UserServices.registerUser(
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
