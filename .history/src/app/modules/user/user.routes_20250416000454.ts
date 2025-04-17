import { Router } from "express";




const router = Router();

router.post(
    '/',
    clientInfoParser,
    validateRequest(UserValidation.userValidationSchema),
    UserController.registerUser
 );
