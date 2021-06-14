import React from "react";
import "./MoviesListCard.css";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const MoviesListCard = ({ title, poster_path, overview, vote_average }) => {
  
  return (
      <div className="movie">
        <img className="movie__img" src={IMG_API + poster_path} alt={title} />

        <div className="movie__info">
          <h3 className="movie__title">{title}</h3>
          <p className="movie__vote">{vote_average}</p>
        </div>

        <div className="movie__over">
          <h2 className="movie__over-title">Overview:</h2>
          <p className="movie__over-info">{overview}</p>
        </div>
      </div>
  );
};

export default MoviesListCard;
