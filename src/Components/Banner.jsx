import React from "react";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="hero  text-white"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-md text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Discover. <br />
            Watch. <br />
            <span className="text-red-600">Enjoy.</span>
          </h1>

          <p className="py-4 sm:py-6 text-base sm:text-lg">
            Find your next favorite movie from thousands of titles
          </p>

          <button className="btn border-none bg-red-600 text-white hover:bg-red-700">
            Explore Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;