import React from "react";

import {Link , NavLink} from "react-router-dom";

const Navbar = () =>  {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
  <a className="navbar-brand" href="#">MyWebsite</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className="float-right">
  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">
         Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="about">
        About </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/contact">
       Contact </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/content">
       Content </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="feedback">
       Feedback </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="Camera">
      Camera </NavLink>
      </li>
      </ul>
     
  </div>
  </div>
  </div>
</nav>

    );
};

export default Navbar;