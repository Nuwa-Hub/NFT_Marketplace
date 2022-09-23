const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  const router = require("express").Router();
  const Collection = require("../models/Collection");

  //CREATE
router.post("/", async (req, res) => {
    const newCollection = new Collection(req.body);
  
    try {
      const savedCollection = await newCollection.save();
      res.status(200).json(savedCollection);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get Collection by user id
router.get("/:id", async (req, res) => {
    try {
      const collections = await Collection.find({ receiverId: req.params.id });
      res.status(200).json(collections);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE Collection
router.delete("/:taskId/:receiverId",  async (req, res) => {
    try {
      
      const deleteCollection = await Collection.deleteMany({taskId:req.params.taskId,receiverId:req.params.receiverId});
      res.status(200).json();
    } catch (err) {
      console.log("err");
      res.status(500).json(err);
    }
  });
  
  module.exports = router;