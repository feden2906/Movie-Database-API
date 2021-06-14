import React, { useEffect, useState} from 'react';
import MoviesList from "./components/MoviesList/MoviesList ";
import './App.css'
import Header from './components/Header/Header';



const MAIN_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=31f6186cdd89ac2f622ddafb0d545360&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=31f6186cdd89ac2f622ddafb0d545360&language=en-US&page=1&include_adult=false&query=";



function App() {

  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const fetchData = async () => {
    const response = await fetch(MAIN_API);
    const data = await response.json();
    setMovies(data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchItem)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      {/* <Header /> */}
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search :)" value={searchItem} onChange={handleOnChange} >

          </input>
        </form>
      </header>
      <div class="movie__container">
        {movies.map((movie) => (
          <MoviesList key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}


export default App;
