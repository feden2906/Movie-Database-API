import React, { useEffect, useState } from "react";
import "./MoviesListCard.css";
import  PosterPreview  from "../PosterPreview/PosterPreview";



const setMovieVote = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
};

const MoviesList = (props) => {
  
  return (
    <div className="movie">
      <PosterPreview {...props}/>
      <div className="movie__info">
        <h3 className="movie__title">{props.title}</h3>
        <span className={`movie__vote ${setMovieVote(props.vote_average)}`}>
          {props.vote_average}
        </span>
      </div>

      <div className="movie__over">
        <h2 className="movie__over-title">Overview:</h2>
        <p className="movie__over-info">{props.overview}</p>
      </div>
    </div>
  );
};

export default MoviesList;
