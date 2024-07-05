import express from "express";
import cors from "cors";
// const { v4: uuidv4 } = require('uuid');

const app = express();
// const { v4: uuidv4 } = require(uuidv4);

import movieRouter from "./src/router/movies.js";

app.use(cors());
app.use(express.json());
app.use(movieRouter);

app.use((req, res) => {
  return res.status(404).send("Sorry, endpoint not exist");
});
// app.listen(3000);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
