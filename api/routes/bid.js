const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  const router = require("express").Router();
  const Bid = require("../models/Bid");

  //CREATE
router.post("/", async (req, res) => {
    const newBid = new Bid(req.body);
  
    try {
      const savedBid = await newBid.save();
      res.status(200).json(savedBid);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get Bid by user id
router.get("/:id", async (req, res) => {
    try {
      const Bids = await Bid.find({ receiverId: req.params.id });
      res.status(200).json(Bids);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE Bid
router.delete("/:taskId/:receiverId",  async (req, res) => {
    try {
      
      const deleteBid = await Bid.deleteMany({taskId:req.params.taskId,receiverId:req.params.receiverId});
      res.status(200).json();
    } catch (err) {
      console.log("err");
      res.status(500).json(err);
    }
  });
  
  module.exports = router;