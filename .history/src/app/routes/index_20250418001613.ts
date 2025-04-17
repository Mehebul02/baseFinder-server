import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { RentalHouseRoutes } from "../modules/Landlords/landlord.routes";

const router = Router();

const moduleRoutes = [
   {
      path: '/user',
      route: UserRoutes,
   },
   {
      path:'/landlords/listings',
      route:RentalHouseRoutes,
   }
   
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;