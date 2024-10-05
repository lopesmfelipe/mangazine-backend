import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import { createReadlist } from './readlistController.js';

// GET USER BY ID INCLUDING THE ROLE FIELD
export const getUserById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.userId).select('role');

    if (!user) {
      return next(new AppError('User not found', 404));
    }
    return res.status(200).json({
      status: 'success',
      user,
    });
  },
);

// CREATE USER
export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, userId } = req.body;

    // Create the default readlist for the user
    const readlist = await createReadlist(userId);

    // Create the new user with the default readlist
    const newUser = await User.create({
      name,
      email,
      userId,
      readList: readlist._id,
    });

    res.status(201).json({
      status: 'success',
      data: {
        userName: newUser.name,
        email: newUser.email,
      },
    });
  },
);

// GET LISTS
export const getUserLists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;

  const user = await User.findOne({ userId }).populate('lists');

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  // Extract the lists from the user object
  const { lists } = user;

  // Return the lists
  return res.status(200).json({
    status: 'success',
    result: lists.length,
    data: { lists },
  });
};
