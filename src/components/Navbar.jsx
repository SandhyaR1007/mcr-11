import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useMoviesContext } from "../context/MoviesContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { updateSearchQuery } = useMoviesContext();
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let id = setTimeout(() => {
      updateSearchQuery(searchText);
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (location?.pathname !== "/") {
      navigate("/");
    }
  };
  return (
    <nav className="flex justify-between p-2 text-white bg-neutral-700">
      <h1>IMDB</h1>
      <input
        className="text-black border px-3 py-1 rounded-md outline-none"
        value={searchText}
        onChange={handleSearch}
        type="search"
        placeholder="Search movies by title, cast, director..."
      />
      <ul className="flex gap-3 items-center">
        <li>
          <NavLink to="/">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <NavLink to="/starredMovies">Starred Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
