import express from "express";
import rout from "./routes/movieroutes.js";

const app = express();

app.use(express.json());
app.use("/", rout);

app.listen(3000, () => {
  console.log("Runs");
});
