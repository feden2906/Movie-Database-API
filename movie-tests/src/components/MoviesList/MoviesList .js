import React, {useEffect, useState} from 'react';
import "./MoviesList.css";
// const MAIN_API = 'https://api.themoviedb.org/3/discover/movie?api_key=31f6186cdd89ac2f622ddafb0d545360&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const IMG_API = "https://image.tmdb.org/t/p/w500";

const MoviesList = ({ title, poster_path, overview, vote_average }) => {
    // const [movies, setMovies] = useState([]);

    // const fetchData = async () => {
    //   const response = await fetch(MAIN_API);
    //   const data = await response.json();
    //   setMovies(data.results);
    // };
    // useEffect(() => {
    //   fetchData();
    // }, []);
    return (<>
        {/* <div class="movie__container">
        {movies.map((movie) => (
          {...movie}
        ))}
      </div> */}
        <div className="movie">
        <img className="movie__img" src={IMG_API + poster_path} alt={title} />

        <div className ="movie__info">
            <h3 className="movie__title">{title}</h3>
            <p className="movie__vote">{vote_average}</p>
        </div>

        <div className="movie__over">
            <h2 className="movie__over-title">Overview:</h2>
            <p className="movie__over-info">{overview}</p>
        </div>
        </div>
        </>
    )
}

export default MoviesList;