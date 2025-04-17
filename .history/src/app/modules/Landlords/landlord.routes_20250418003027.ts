import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { RentalHouseValidation } from "./landlord.validation";
import { RentalHouseController } from "./landlord.controller";



const router = Router()

router.post('/',validateRequest(RentalHouseValidation.rentalHouseValidationSchema),RentalHouseController.createRentalHouse)
router.get('/',validateRequest(RentalHouseValidation.rentalHouseValidationSchema),RentalHouseController.)


export const RentalHouseRoutes = router