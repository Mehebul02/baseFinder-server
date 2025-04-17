import { IUser, UserRole } from './user.interface';
import User from './user.model';
import AppError from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';




// ✅ Register a new user
const registerUser = async (userData: IUser) => {
   userData.role = 'admin'

    console.log('Admin access', userData);
    const result = await User.create(user)
    return result
};


// const registerUser = async (userData: IUser) => {
//    const session = await mongoose.startSession();
//    try {
//       session.startTransaction();

//       // Prevent registration of admin
//       if (userData.role === UserRole.ADMIN) {
//          throw new AppError(StatusCodes.NOT_ACCEPTABLE, 'Invalid role. Only Tenant or Landlord is allowed.');
//       }

//       // Check if user exists
//       const existingUser = await User.findOne({ email: userData.email }).session(session);
//       if (existingUser) {
//          throw new AppError(StatusCodes.CONFLICT, 'Email is already registered');
//       }

//       // Create new user
//       const newUser = new User(userData);
//       const savedUser = await newUser.save({ session });

//     //   // If role is tenant, create customer profile
//     //   if (userData.role === UserRole.TENANT) {
//     //      const profile = new Customer({
//     //         user: savedUser._id,
//     //      });
//     //      await profile.save({ session });
//     //   }

//       await session.commitTransaction();

//     //   // Auto login after registration
//     //   return await AuthService.loginUser({
//     //      email: savedUser.email,
//     //      password: userData.password,
         
//     //   });

//    } catch (error) {
//       if (session.inTransaction()) {
//          await session.abortTransaction();
//       }
//       throw error;
//    } finally {
//       session.endSession();
//    }
// };


// ✅ Get all users (with filter, pagination, etc.)
// const getAllUsers = async (query: Record<string, unknown>) => {
//    const userQuery = new QueryBuilder(User.find(), query)
//       .search(UserSearchableFields)
//       .filter()
//       .sort()
//       .paginate()
//       .fields();

//    const users = await userQuery.modelQuery;
//    const meta = await userQuery.countTotal();

//    return {
//       data: users,
//       meta,
//    };
// };


// // ✅ Get my profile (by token)
// const getMyProfile = async (authUser: IJwtPayload) => {
//    const user = await User.findById(authUser.userId);
//    if (!user) throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
//    if (!user.isActive) throw new AppError(StatusCodes.BAD_REQUEST, 'User is not active');

//    let profile = null;
//    if (user.role === UserRole.TENANT) {
//       profile = await Customer.findOne({ user: user._id });
//    }

//    return {
//       ...user.toObject(),
//       profile,
//    };
// };


// // ✅ Update profile (for tenant only)
// const updateMyProfile = async (
//    payload: Partial<ICustomer>,
//    file: IImageFile,
//    authUser: IJwtPayload
// ) => {
//    const user = await User.findById(authUser.userId);
//    if (!user) throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
//    if (!user.isActive) throw new AppError(StatusCodes.BAD_REQUEST, 'User is not active');

//    if (file?.path) {
//       payload.photo = file.path;
//    }

//    const updatedProfile = await Customer.findOneAndUpdate(
//       { user: authUser.userId },
//       payload,
//       { new: true }
//    ).populate('user');

//    return updatedProfile;
// };


// ✅ Toggle user active/inactive (for admin)
// const toggleUserStatus = async (userId: string) => {
//    const user = await User.findById(userId);
//    if (!user) {
//       throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
//    }

//    user.isActive = !user.isActive;
//    return await user.save();
// };


export const UserServices = {
   registerUser,
  
};
