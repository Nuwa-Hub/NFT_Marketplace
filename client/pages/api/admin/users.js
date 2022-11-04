import User from "models/User";
import Collection from "models/Collection";
import NFT from "models/NFT";
import connectDB from "utils/connectDB";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
    const { method } = req;

    //db connect()
    await connectDB();

    if (method === "GET") {
        let token;
        const authHeader = req.headers.authorization;
        // if (authHeader && authHeader.startsWith("Bearer ")) {
        try {

            let users = await User.find();
            let collections = null
            let nfts = null
            for (let i = 0; i < users.length; i++) {
                collections = await Collection.countDocuments({ owner: users[i].walletAdress });
                nfts = await NFT.countDocuments({ owner: users[i].walletAdress });
                users[i] = { ...users[i]._doc, collections, nfts }
            }
            console.log(users);
            res.status(200).json({ users });
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
