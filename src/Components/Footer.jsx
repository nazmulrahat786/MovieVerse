import React from "react";

const Footer = () => {
  return (
    <footer className="bg-mist-900 text-white  py-4">
      <div className="text-center">
        <h2 className="text-base font-bold">MovieVerse</h2>
        <p className="text-xs text-gray-400 mt-1">
          © {new Date().getFullYear()} MovieVerse
        </p>
      </div>
    </footer>
  );
};

export default Footer;