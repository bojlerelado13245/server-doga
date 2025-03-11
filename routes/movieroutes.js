import express from "express";
import * as moviecont from "../controllers/moviecontroller.js";

const router = express.Router();

router.get("/movies", moviecont.getAllMovies);

router.get("/moives/:id", moviecont.getMovieById);

router.post("/moives", moviecont.createMovie);

router.put("/movies/:id", moviecont.updateMovie);

router.delete("/movies/:id", moviecont.deleteMovie);

export default router;
