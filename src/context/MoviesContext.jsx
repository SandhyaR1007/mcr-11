import { createContext, useContext, useReducer } from "react";
import { actionTypes, initialState, moviesReducer } from "./moviesReducer";
import { useFilter } from "../utils/useFilter";
import { useSearch } from "../utils/useSearch";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const { filterByGenre, filterByRating, filterByYear } = useFilter();
  const { searchMovies } = useSearch();

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
  const updateSearchQuery = (searchText) => {
    dispatch({
      type: actionTypes.searchMovies,
      payload: searchText,
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

  const getMovieDetailsById = (movieId) =>
    state.moviesList.find(({ id }) => Number(id) === Number(movieId));

  let filteredMovies = searchMovies(state.moviesList, state.searchQuery);
  filteredMovies = filterByGenre(filteredMovies, state.filters.genre);
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
        searchQuery: state.searchQuery,
        genreData,
        filteredMovies,
        starredMoviesList,
        watchlistMoviesList,
        updateGenre,
        updateRating,
        updateYear,
        updateSearchQuery,
        toggleStarred,
        toggleWatchlist,
        getMovieDetailsById,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
