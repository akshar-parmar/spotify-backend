import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    //fetch all the user , accept the current logged in user
    const currentUserId = req.auth.userId;
    const users = await User.find({
      clerkId: { $ne: currentUserId },
    });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
