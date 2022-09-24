import User from "../../../models/User";
import connectDB from "../../../utils/connectDB";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
    const { method } = req;

    //db connect()
    await connectDB();

    if (method === "POST") {
        console.log(req.body)
        try {
            let user = await User.findOne({ walletAdress: req.body.walletAdress });
            if (!user) {
                const newUser = new User(req.body);
                user = await newUser.save()
            }
            const userToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC,
                { expiresIn: "2d" }
            );
            user = user._doc;
            res.status(200).json({ user, userToken });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
