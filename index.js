const express = require("express");
const cors = require("cors");
// const { v4: uuidv4 } = require('uuid');

const app = express();
// const { v4: uuidv4 }=require(uuidv4)

app.use(cors());
app.use(express.json());

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

app.get("/getMovies", function (req, res) {
  const sortedMovies = [...movies].sort((a, b) => a.rating - b.rating);
  return res.status(200).json({
    response: "success",
    movies: sortedMovies,
  });
});

app.get("/getMovieById/:id", function (req, res) {
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
});

app.post("/addMovie", function (req, res) {
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
});

app.delete("/deleteMovies", function (req, res) {
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
});

app.use((req, res) => {
  return res.status(404).send("Sorry, endpoint not exist");
});
// app.listen(3000);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
