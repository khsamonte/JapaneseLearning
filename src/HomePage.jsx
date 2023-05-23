import React from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

localStorage.setItem("isAuthenticated", false);

function Home() {
  return (
    <div className="home">
      <h1>Personal Japanese Learning App</h1>
      <div className="home__buttons">
        <Link to="/vocabulary" className="home__button">
          Vocabulary (Goi)
        </Link>
        <button className="home__button" disabled>
          Sentence Pattern (Bunkei)
        </button>
        <button className="home__button" disabled>
          Sample Sentence (Reibun)
        </button>
        <button className="home__button" disabled>
          Exercises (Renshuu)
        </button>
        <button className="home__button" disabled>
          Kanji
        </button>
      </div>
    </div>
  );
}

export default Home;
