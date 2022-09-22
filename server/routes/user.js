const router = require("express").Router();
const { User } = require("../models");
const { authMiddleware } = require("../utils/auth");

// UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(403).json({ msg: "Can't update account" });
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "User has been deleted" });
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(403).json({ msg: "Can't delete account account" });
  }
});

// GET
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(401).json(err);
  }
});

// GET ALL USERS
router.get("/", authMiddleware, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(403).json({ msg: "You are not allowed to see all users!" });
  }
});



module.exports = router;
