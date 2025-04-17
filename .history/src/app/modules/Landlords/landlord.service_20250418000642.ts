import { IRentalHouse } from "./landlord.interface";
import { RentalHouseModel } from "./landlord.model";



const createRentalHouse = async (payload: IRentalHouse) => {
    const newHouse = await RentalHouseModel.create(payload);
    return newHouse;
  }