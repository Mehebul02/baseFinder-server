import { Router } from "express";




const router = Router();

router.post(
    '/',
  
    validateRequest(UserValidation.userValidationSchema),
    UserController.registerUser
 );
