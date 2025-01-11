import React from "react";
import "./styles.css";

import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>

        <Link to="/" className="logo-nav"> Git Explorer</Link>

        <Link to="/" className="logo-nav"> Repos</Link>

        <Link to="/users" className="logo-nav"> Users</Link>


      </nav>

      <Outlet/>
    </>
  );
};

export default Navbar;
