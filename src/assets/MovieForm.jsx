import React, { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../services/validation";
const MovieForm = ({ onSave, editingMovie }) => {
  const [movie, setMovie] = useState({
    name: "",
    year: "",
    genere: "",
    rating: "",
    poster: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (editingMovie) setMovie(editingMovie);
  }, [editingMovie]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(movie, { abortEarly: false }); // throws if invalid
      onSave(movie);
      if (!editingMovie) {
        setMovie({ name: "", year: "", genere: "", rating: "", poster: "" });
      }
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const fieldErrors = err.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setErrors(fieldErrors);
      }
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          name="name"
          placeholder="Name"
          value={movie.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
        <input
          name="year"
          placeholder="Year"
          value={movie.year}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        />
        {errors.year && (
          <p className="text-red-500 text-sm md-4">{errors.year}</p>
        )}
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          name="genere"
          placeholder="Genre"
          value={movie.genere}
          onChange={handleChange}
        />
        {errors.genere && (
          <p className="text-red-500 text-sm mt-1">{errors.genere}</p>
        )}
        <input
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
          className="mb-5 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.rating && (
          <p className="text-red-500 text-sm ">{errors.rating}</p>
        )}

        <input
          className="mb-5 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="poster"
          placeholder="Poster URL"
          value={movie.poster}
          onChange={handleChange}
        />
        {errors.poster && (
          <p className="text-red-500 text-sm">{errors.poster}</p>
        )}
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
