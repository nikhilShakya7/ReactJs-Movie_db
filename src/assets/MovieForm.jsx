import React, { useEffect, useState } from "react";

const MovieForm = ({ onSave, editingMovie }) => {
  const [movie, setMovie] = useState({
    name: "",
    year: "",
    genere: "",
    rating: "",
    poster: "",
  });
  useEffect(() => {
    if (editingMovie) setMovie(editingMovie);
  }, [editingMovie]);
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(movie);
    if (!editingMovie) {
      setMovie({ name: "", year: "", genere: "", rating: "", poster: "" });
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="w-full px-5 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          name="name"
          placeholder="Name"
          value={movie.name}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          placeholder="Year"
          value={movie.year}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          name="genere"
          placeholder="Genre"
          value={movie.genere}
          onChange={handleChange}
        />
        <input
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
          className="mb-5 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          className="mb-5 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="poster"
          placeholder="Poster URL"
          value={movie.poster}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {editingMovie ? "Update" : "Add"}Movie
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
