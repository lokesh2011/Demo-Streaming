import React from "react";
import "./CSS folder/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h2>Popular Title</h2>
      </div>
      <div className="nav_cards">
        <Link to="series">
          <div className="series_card">
            <p style={{ marginTop: "30px" }}>SERIES</p>
          </div>
          <p className="link_name">Popular Series</p>
        </Link>
        <Link to="movies">
          <div className="movies_card">
            <p style={{ marginTop: "30px" }}>MOVIES</p>
          </div>
          <p className="link_name">Popular Movies</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
