import React from "react";

const MovieList = ({ movies = [], onEdit, onDelete }) => {
  if (!Array.isArray(movies)) return <p>No movies to display.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={movie.poster}
            alt={movie.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
            <p className="text-gray-600 mb-4 ">
              {movie.year} | {movie.genere} | Rating: {movie.rating}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => onEdit(movie)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(movie.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
