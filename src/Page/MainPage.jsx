import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <div className="max-w-7xl bg-mist-950 min-h-screen flex flex-col justify-between mx-auto   ">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
