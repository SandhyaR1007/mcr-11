import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 text-white bg-neutral-700">
      <h1>IMDB</h1>
      <input
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
