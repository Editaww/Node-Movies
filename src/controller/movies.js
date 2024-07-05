let movies = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    description: "A mind-bending thriller by Christopher Nolan.",
    imdbLink: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Matrix",
    rating: 8.7,
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    imdbLink: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imdbLink: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 9.0,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    imdbLink: "https://www.imdb.com/title/tt/",
  },
];
const GET_MOVIES = function (req, res) {
  const sortedMovies = [...movies].sort((a, b) => a.rating - b.rating);
  return res.status(200).json({
    response: "success",
    movies: sortedMovies,
  });
};
const GET_MOVIE_BY_ID = function (req, res) {
  const id = req.params.id;
  const movie = movies.find((movie) => {
    return movie.id == id;
  });
  if (!movie) {
    return res.status(404).json({
      message: `Movie with ${id} id does not exist`,
    });
  }
  return res.status(200).json({
    response: "success",
    movie: movie,
  });
};
const ADD_MOVIE = function (req, res) {
  const id = req.body.id;
  const existingMovie = movies.find((movies) => {
    return movies.id === id;
  });
  if (!existingMovie) {
    movies.push({
      id: req.body.id,
      title: req.body.title,
      rating: req.body.rating,
      description: req.body.description,
      imdbLink: req.body.imdbLink,
    });
    return res.status(201).json({ message: "Movie successfully loaded" });
  }
  return res
    .status(409)
    .json({ message: "Movie with this ID is already exist" });
};
const DELETE_MOVIES = function (req, res) {
  if (movies.length === 0) {
    return res.status(200).json({
      response: "Data not exist",
    });
  } else {
    movies.splice(0, movies.length); // Išvalome masyvą
    return res.status(200).json({
      response: "All the movies were deleted",
    });
  }
};
const UPDATE_MOVIE_BY_ID = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const idx = movies.findIndex((movie) => {
    return movie.id == id;
  });
  movies[idx] = { ...movies[idx], ...body };
  return res.status(200).json({ message: "Movie was updateed!" });
};

export {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  ADD_MOVIE,
  DELETE_MOVIES,
  UPDATE_MOVIE_BY_ID,
};
