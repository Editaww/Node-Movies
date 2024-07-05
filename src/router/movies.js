import express from "express";

import {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  ADD_MOVIE,
  UPDATE_MOVIE_BY_ID,
  DELETE_MOVIES,
} from "../controller/movies.js";

const router = express.Router();

router.get("/movies", GET_MOVIES);

router.get("/movies/:id", GET_MOVIE_BY_ID);

router.post("/movies", ADD_MOVIE);

router.put("/movies/:id", UPDATE_MOVIE_BY_ID);

router.delete("/movies", DELETE_MOVIES);

export default router;
