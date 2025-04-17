


const createRentalHouse = async (payload: IRentalHouse) => {
    const newHouse = await rentalHouseSchema.create(payload);
    return newHouse;
  }