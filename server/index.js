import express from "express";
import { PORT, mongoDbUrl } from "./config/config.js";
import mongoose from "mongoose";
import Router from "./Route/Route.js";
import cors from "cors"

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome" + req.url.split("/"));
});

app.use("/books", Router)

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("bongoDB connected");
    app.listen(PORT, () => {
      console.log("server is listening on port http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
