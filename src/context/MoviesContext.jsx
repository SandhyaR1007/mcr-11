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
        updateGenre,
        updateRating,
        updateYear,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
