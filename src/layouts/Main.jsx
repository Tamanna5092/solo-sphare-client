import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div>
      <div>
        {/* navbar */}
        <Navbar></Navbar>
        {/* outlet */}
        <div className="min-h-[calc(100vh-306px)]">
          <Outlet></Outlet>
        </div>
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
