import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
// const { v4: uuidv4 } = require('uuid');

const app = express();
// const { v4: uuidv4 } = require(uuidv4);

import movieRouter from "./src/router/movies.js";
import userRouter from "./src/router/user.js";

app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_CONECTION);
mongoose
  .connect(process.env.MONGO_CONECTION)
  .then(() => console.log("Connected to DB successfully"))
  .catch((err) => {
    console.log(err);
  });

app.use(movieRouter);
app.use(userRouter);

app.use((req, res) => {
  return res.status(404).send("Sorry, endpoint not exist");
});
// app.listen(3000);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
