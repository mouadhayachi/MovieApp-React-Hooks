import React from "react";
import Cinema from "../Constants/Cinema.svg";
import Star from "./Star";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#080e1c" }}>
      <a
        className="navbar-brand"
        href="/home"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={Cinema}
          alt="cinema-logo"
          style={{ height: "50px", width: "50px", marginRight: "30px" }}
        />
        <h4>Movie-App React</h4>
      </a>

      <form className="form-inline">
        <input
          className="form-control empty mr-sm-2"
          type="search"
          placeholder="&#xF002; Quick search"
          aria-label="Search"
          style={{ fontWeight: "bold", fontSize: "18px" }}
          onChange={(event) => props.SearchMovieParent(event.target.value)}
        />
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Star
            moviestar={props.starsNumber}
            SearchedStarsParent={props.SearchedStarsParent}
          />
          <p style={{ color: "white" }}>minimum rate</p>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;