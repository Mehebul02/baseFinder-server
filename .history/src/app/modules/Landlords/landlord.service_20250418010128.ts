import { StatusCodes } from "http-status-codes";
import { UserRole } from "../user/user.interface";
import { IJwtPayload, IRentalHouse } from "./landlord.interface";
import { RentalHouseModel } from "./landlord.model";
import AppError from "../../errors/appError";


const createRentalHouse = async (payload: IRentalHouse) => {
    const newHouse = await RentalHouseModel.create(payload);
    return newHouse;
  }

  const getAllRentalHouses = async (): Promise<IRentalHouse[]> => {
    const houses = await RentalHouseModel.find().populate('landlordId');
    return houses;
  };


  // Update Rental House by ID
const updateRentalHouse = async (
    id: string,
    payload: Partial<IRentalHouse>
  ): Promise<IRentalHouse | null> => {
    const updatedHouse = await RentalHouseModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return updatedHouse;
  };
  

  const deleteRentalHouse = async (
    id: string,
    authUser: IJwtPayload
  ) => {
    const result = await RentalHouseModel.findByIdAndDelete(id);
    return result;
  };
  

  export const RentalHouseService = {
    createRentalHouse,
    getAllRentalHouses,
    updateRentalHouse,
    deleteRentalHouse
   
  };