import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { FaStar, FaPlay } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { getAllMovies, saveMovies } from '../Uitilits/Localstorage';


const MovieDetails = () => {
    const [isAdded ,setIsAdded] = useState(false)
    const navigate = useNavigate()
  const data = useLoaderData();
  const { id } = useParams();

  const movieId = parseInt(id);
  const movie = data.find((m) => m.id === movieId);
//  getAllMovies, saveMovies

const handleAddToWishlist = (id) => {
  // Call the saveMovies function from Localstorage.js to add the movie to the wishlist
  saveMovies(id);
}

useEffect(()=>{
    const allAddedMovies = getAllMovies()
 if(allAddedMovies.includes(movieId)){
    setIsAdded(true)
 }





},[])





  const {
    title,
    genre,
    poster,
    rating,
    year,
    duration,
    description,
   
  } = movie;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* Back Button */}
      <button onClick={()=>{
        navigate(-1)
      }} className="mb-6 flex items-center  text-gray-300 hover:text-white">
       <IoIosArrowBack /> Back
      </button>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* Poster */}
        <div className="w-full md:w-[300px]">
          <img
            src={poster}
            alt={title}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-4">{title}</h1>

          {/* Genre + Year + Duration */}
          <div className="flex items-center gap-3 text-gray-300 mb-4">
            <span className="text-red-500 font-medium">{genre}</span>
            <span>•</span>
            <span>{year}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-yellow-400 text-lg">
              <FaStar />
              <span>{rating}/10</span>
            </div>

            <span className="bg-green-700 px-3 py-1 rounded-full text-sm">
              PG-13
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-8 max-w-2xl mb-8">
            {description}
          </p>

        

          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
              onClick={() => handleAddToWishlist(movieId)}
            >
             {isAdded ? "Added to Wishlist" : "Add to Wishlist"}
            </button>

            <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
              <FaPlay />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;