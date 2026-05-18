import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-md">

        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-red-600 tracking-widest">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">
          Lost in MovieVerse 🎬
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition"
        >
          Back to Home
        </a>

        {/* subtle glow line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40" />
      </div>
    </div>
  );
};

export default NotFound;