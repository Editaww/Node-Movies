import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
  title: { type: String, required: true, min: 1 },
  year: { type: Number, required: true, min: 1900 },
  rating: { type: Number, required: true, min: 1 },
  description: { type: String, required: true, min: 1 },
  imdbLink: { type: String, required: true },
  poster: { type: String, required: true },
  userId: { type: String, required: true },
});
const MovieModel = mongoose.model("Movie", movieSchema);

export default MovieModel;
