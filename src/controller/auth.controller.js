import { User } from "../models/user.model.js";

export const authCallback = async(req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        // code: check if user already exist
        const user = await User.findOne({ clerkId: id })
        if (!user) {
            // code: signup of user
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            })
            res.status(200).json({
                result: 1,
                message: 'data saved'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            result: 0,
            message: 'Internal server error',error
        })
    }
}