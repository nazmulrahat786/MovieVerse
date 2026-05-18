import React from "react";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const { title, genre, poster, rating } = movie;

  return (
    <div className="flex w-52 pb-4 flex-col bg-mist-900 text-white gap-2 rounded-lg">
      <img className="w-full h-60 object-cover rounded-t-lg" src={poster} alt={title} />

      <h3 className="text-base px-3 font-bold">{title}</h3>

      <div className="flex justify-between px-3 text-sm">
        <p>{genre}</p>

        <p className="flex items-center text-amber-300 gap-1">
          <FaStar color="gold" />
          {rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;