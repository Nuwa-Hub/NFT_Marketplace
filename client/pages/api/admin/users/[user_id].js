import User from "models/User";
import Collection from "models/Collection";
import NFT from "models/NFT";
import connectDB from "utils/connectDB";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
    const { method } = req;
    const { user_id } = req.query;
    //db connect()
    await connectDB();

    if (method === "GET") {
        const { user_id } = req.query;
        try {

            let user = await User.aggregate([
                {
                    '$match': {
                        'walletAdress': user_id
                    }
                }, {
                    '$lookup': {
                        'from': 'collections',
                        'localField': 'walletAdress',
                        'foreignField': 'owner',
                        'as': 'collections'
                    }
                }, {
                    '$lookup': {
                        'from': 'nfts',
                        'localField': 'walletAdress',
                        'foreignField': 'owner',
                        'as': 'nfts'
                    }
                }
            ])
            if (user[0]) {
                console.log(user[0])
                return res.status(200).json({ user: user[0] });
            } else {
                return res.status(404).json({ success: false, message: "User not found" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
        // } else {
        //     res.status(401).json({ message: "Not authorized" });
        // }
    }
    // res.status(400).json({ message: "Invalid request" });
}
