import React from "react";
import "./PosterPreview.css";

const IMG_API = "https://image.tmdb.org/t/p/w500";

 const PosterPreview = (props) => {

  return <img className="movie__img" src={IMG_API + props.poster_path} alt={props.title} />;
};

export default PosterPreview;


