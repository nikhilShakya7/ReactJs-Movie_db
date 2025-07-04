import React, { useEffect, useState } from "react";
import MovieForm from "./assets/MovieForm";
import MovieList from "./assets/MovieList";
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./services/movieService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  const loadMovies = async () => {
    try {
      const res = await getMovies();
      console.log("Fetched movies:", res.data);
      setMovies(res.data);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleSave = async (movie) => {
    if (movie.id) {
      await updateMovie(movie.id, movie);
    } else {
      await addMovie(movie);
    }
    setEditingMovie(null);
    loadMovies();
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    loadMovies();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Movie Manager
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {editingMovie ? "Edit Movie" : "Add a New Movie"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MovieForm onSave={handleSave} editingMovie={editingMovie} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Movie Collection
              </h2>
              {movies && movies.length > 0 ? (
                <MovieList
                  movies={movies}
                  onEdit={setEditingMovie}
                  onDelete={handleDelete}
                />
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No movies found. Add your first movie!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
