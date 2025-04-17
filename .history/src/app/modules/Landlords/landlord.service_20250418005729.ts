import { StatusCodes } from "http-status-codes";
import { UserRole } from "../user/user.interface";
import { IRentalHouse } from "./landlord.interface";
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
  

  const deleteRentalHouseIntoDB = async (
    id: string,
    authUser: IJwtPayload
  ) => {
    const rentalHouse = await RentalHouseModel.findById(id);
    if (!rentalHouse) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Rental house not found!');
    }
  
    // Check permission: only landlords who created the listing or admins can delete
    if (
      authUser.role === UserRole.LANDLORD &&
      rentalHouse.landlordId.toString() !== authUser.userId
    ) {
      throw new AppError(
        StatusCodes.FORBIDDEN,
        'You are not allowed to delete this rental house!'
      );
    }
  
    // Optional: You can check if the house is linked to any active rentals/requests/etc.
  
    const deletedHouse = await RentalHouseModel.findByIdAndDelete(id);
    return deletedHouse;
  };
  

  export const RentalHouseService = {
    createRentalHouse,
    getAllRentalHouses,
    updateRentalHouse
   
  };