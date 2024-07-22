import express from "express";

import {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  ADD_MOVIE,
  UPDATE_MOVIE_BY_ID,
  DELETE_MOVIE,
} from "../controller/movies.js";
import validate from "..//middlewares/validation.js";
import { auth } from "../middlewares/auth.js";
import movieSchema from "../schema/movie.js";

const router = express.Router();

router.get("/movies", auth, GET_MOVIES);

router.get("/movies/:id", GET_MOVIE_BY_ID);

router.post("/movies", auth, validate(movieSchema), ADD_MOVIE);

router.put("/movies/:id", UPDATE_MOVIE_BY_ID);

router.delete("/movies/:id", DELETE_MOVIE);

export default router;
