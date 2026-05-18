import React from "react";
import { getAllMovies, removeMovie } from "../Uitilits/Localstorage";
import { useLoaderData } from "react-router";

const Wishlist = () => {
  const data = useLoaderData();
  const allMovies = getAllMovies();
  const wishlistMovies = data.filter((m) => allMovies.includes(m.id));
  console.log(wishlistMovies);
  const handleRemoveFromWishlist = (id) => {
    // Call the saveMovies function from Localstorage.js to add the movie to the wishlist
    removeMovie(id);
  }
  return (
    <div>
      <h1 className="text-white ml-7 text-xl font-bold">Wishlist ({allMovies.length})</h1>
      {
        wishlistMovies.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">Your wishlist is empty.</p>
        ) : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-[#0b0f18] border border-white/10 p-4 rounded-lg"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-white font-bold mt-2">{movie.title}</h2>
           <button onClick={()=>{
            handleRemoveFromWishlist(movie.id)
           }} className="btn border-none  hover:bg-red-800 bg-red-600 text-white  w-full">Remove</button>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Wishlist;
