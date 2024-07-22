import MovieModel from "../model/movie.js";

const GET_MOVIES = async function (req, res) {
  try {
    const movies = await MovieModel.find({ userId: req.body.userId }).sort({
      rating: -1,
    });
    res.status(200).json({
      response: "success",
      movies: movies,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const GET_MOVIE_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({
        message: `Movie with ${id} id does not exist`,
      });
    }
    return res.status(200).json({
      response: "success",
      movie: movie,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};
const ADD_MOVIE = async (req, res) => {
  try {
    const movie = new MovieModel({
      title: req.body.title,
      year: req.body.year,
      rating: req.body.rating,
      description: req.body.description,
      imdbLink: req.body.imdbLink,
      poster: req.body.poster,
      userId: req.body.userId,
    });

    await movie.save();

    return res.status(201).json({ message: "Movie successfully loaded" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const DELETE_MOVIE = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({
        message: `Movie with ${id} id does not exist`,
      });
    }
    return res.status(200).json({
      response: "success",
      message: `Movie with id ${id} was successfully deleted`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const UPDATE_MOVIE_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({
        message: `Movie with id ${id} does not exist`,
      });
    }
    return res.status(200).json({ message: "Movie was updated!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE_BY_ID,
};
