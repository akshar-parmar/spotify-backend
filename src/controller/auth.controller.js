import { User } from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    //check if user exist in mongo db
    const user = await User.findOne({
      clerkId: id,
    });
    if (!user) {
      //signup
      const user = await User.create({
        fullName: `${firstName} ${lastName}`,
        imageUrl: imageUrl,
        clerkId: id,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("error in auth callback", error);
    next(error);
  }
};
