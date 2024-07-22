import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



const NavBar = () => {
  let location = useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" a="/">
            My Notes
          </Link>
          <div>
          <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
          </div>


        </div>
      </nav>
    </div>
  );
};

export default NavBar;
