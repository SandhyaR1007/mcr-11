import { movies } from "../data";

export const initialState = {
  moviesList: movies,
  filters: {
    genre: "",
    rating: "",
    year: "",
  },
};

export const actionTypes = {
  filterByGenre: "FILTER_BY_GENRE",
  filterByYear: "FILTER_BY_YEAR",
  filterByRating: "FILTER_BY_RATING",
};
export const moviesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.filterByGenre:
      return { ...state, filters: { ...state.filters, genre: action.payload } };
    case actionTypes.filterByYear:
      return { ...state, filters: { ...state.filters, year: action.payload } };

    case actionTypes.filterByRating:
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };
    default:
      return { ...state };
  }
};
