import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";




const router = Router();

router.post(
    '/',
  
    validateRequest(UserValidation.userValidationSchema),
    UserController.registerUser
 );
