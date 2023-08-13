import { Route, Routes } from "react-router-dom";
import { MovieDetails, MovieListing, StarredMovies, Watchlist } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/starredMovies" element={<StarredMovies />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
};

export default App;
