import { createContext, useContext, useReducer } from "react";
import { actionTypes, initialState, moviesReducer } from "./moviesReducer";
import { useFilter } from "../utils/useFilter";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const { filterByGenre, filterByRating, filterByYear } = useFilter();

  const updateGenre = (selectedGenre) => {
    dispatch({
      type: actionTypes.filterByGenre,
      payload: selectedGenre,
    });
  };
  const updateYear = (selectedYear) => {
    dispatch({
      type: actionTypes.filterByYear,
      payload: selectedYear,
    });
  };
  const updateRating = (selectedRating) => {
    dispatch({
      type: actionTypes.filterByRating,
      payload: selectedRating,
    });
  };

  const toggleWatchlist = (movieId) => {
    const updatedMovies = state.moviesList.map((data) =>
      data?.id === movieId
        ? data?.inWatchlist
          ? { ...data, inWatchlist: false }
          : { ...data, inWatchlist: true }
        : data
    );
    dispatch({
      type: actionTypes.toggleWatchlist,
      payload: updatedMovies,
    });
  };
  const toggleStarred = (movieId) => {
    const updatedMovies = state.moviesList.map((data) =>
      data?.id === movieId
        ? data?.isStarred
          ? { ...data, isStarred: false }
          : { ...data, isStarred: true }
        : data
    );
    dispatch({
      type: actionTypes.toggleStarred,
      payload: updatedMovies,
    });
  };

  const starredMoviesList = state.moviesList.filter((data) => data?.isStarred);
  const watchlistMoviesList = state.moviesList.filter(
    (data) => data?.inWatchlist
  );

  let filteredMovies = filterByGenre(state.moviesList, state.filters.genre);
  filteredMovies = filterByYear(filteredMovies, state.filters.year);
  filteredMovies = filterByRating(filteredMovies, state.filters.rating);

  const genreData = state.moviesList.reduce((acc, { genre }) => {
    let currentGenreArr = genre.filter((data) => !acc?.includes(data));
    return [...acc, ...currentGenreArr];
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        moviesList: state.moviesList,
        filters: state.filters,
        genreData,
        filteredMovies,
        starredMoviesList,
        watchlistMoviesList,
        updateGenre,
        updateRating,
        updateYear,
        toggleStarred,
        toggleWatchlist,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
