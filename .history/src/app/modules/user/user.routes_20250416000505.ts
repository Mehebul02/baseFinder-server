import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";




const router = Router();

router.post(
    '/',
  
    validateRequest(UserValidation.userValidationSchema),
    UserController.registerUser
 );
