const router = require("express").Router();
const { Movie } = require("../models");
const { authMiddleware } = require("../utils/auth");

// CREATE
router.post("/", authMiddleware, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ msg: "Not aloud to create movie" });
  }
});

// UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  if (req.user.isAdmin) {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    try {
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ msg: "Not aloud to create movie" });
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req, res) => {
  if (req.user.isAdmin) {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    try {
      res.status(200).json(deletedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ msg: "Not aloud to delete a movie" });
  }
});

// GET
router.get("/find/:id", authMiddleware, async (req, res) => {
  const getMovie = await Movie.findById(req.params.id);

  try {
    res.status(200).json(getMovie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// RANDOM MOVIE
router.get("/random", authMiddleware, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get("/", authMiddleware, async (req, res) => {
  if (req.user.isAdmin) {
    const getAllMovies = await Movie.find({});

    try {
      res.status(200).json(getAllMovies);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ msg: "Your are not allowed!" });
  }
});

module.exports = router;
