import React from "react";
import './SearchInput.css'

function SearchInput() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch(MAIN_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
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
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search :)"
            value={searchItem}
            onChange={handleOnChange}
          ></input>
        </form>
    </div>
  );
}

export default SearchInput;