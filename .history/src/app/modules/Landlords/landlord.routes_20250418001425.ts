import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { RentalHouseValidation } from "./landlord.validation";



const router = Router()

router.post('/',validateRequest(RentalHouseValidation.))