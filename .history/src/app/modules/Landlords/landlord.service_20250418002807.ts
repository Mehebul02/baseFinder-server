import { IRentalHouse } from "./landlord.interface";
import { RentalHouseModel } from "./landlord.model";



const createRentalHouse = async (payload: IRentalHouse) => {
    const newHouse = await RentalHouseModel.create(payload);
    return newHouse;
  }

  const getAllRentalHouses = async (): Promise<IRentalHouse[]> => {
    const houses = await RentalHouseModel.find().populate('landlordId');
    return houses.map(house => ({
        ...house.toObject(),
        availableFrom: house.availableFrom ?? undefined,
    }));
  };

  export const RentalHouseService = {
    createRentalHouse,
    getAllRentalHouses
   
  };