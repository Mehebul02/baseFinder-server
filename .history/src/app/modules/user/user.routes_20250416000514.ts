import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";
import { UserController } from "./user.controller";




const router = Router();

router.post(
    '/',validateRequest(UserValidation.userValidationSchema),
    UserController.registerUser
 );
