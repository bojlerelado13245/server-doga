import Movies from "../data/Movies.js";

export const getAllMovies = (req, res) => {
  res.status(200).json(Movies);
};

export const getMovieById = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= Movies.length) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.status(200).json(Movies[id]);
};

export const createMovie = (req, res) => {
  const { name, director, year, oscar } = req.body;
  if (!name || !director || !year || !oscar) {
    return res.status(400).json({ message: "Missing data" });
  }
  const newMovie = { name, director, year, oscar };
  Movies.push(newMovie);
  res.status(201).json(newMovie);
};

export const updateMovie = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= Movies.length) {
    return res.status(404).json({ message: "Movie not found" });
  }
  const { name, director, year, oscar } = req.body;
  if (!name || !director || !year || !oscar) {
    return res.status(400).json({ message: "Missing data" });
  }
  Movies[id] = { name, director, year, oscar };
  res.status(200).json(Movies[id]);
};

export const deleteMovie = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= Movies.length) {
    return res.status(404).json({ message: "Movie not found" });
  }
  Movies.splice(id, 1);
  res.status(200).json({ message: "Delete successful" });
};
