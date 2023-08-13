export const useFilter = () => {
  const filterByGenre = (moviesData, selectedGenre) => {
    return selectedGenre === ""
      ? moviesData
      : moviesData?.filter(({ genre }) =>
          genre.some((data) => data === selectedGenre)
        );
  };
  const filterByRating = (moviesData, selectedRating) => {
    return selectedRating === ""
      ? moviesData
      : moviesData?.filter(({ rating }) => rating === Number(selectedRating));
  };

  const filterByYear = (moviesData, selectedYear) => {
    return selectedYear === ""
      ? moviesData
      : moviesData?.filter(({ year }) => year === Number(selectedYear));
  };
  return { filterByGenre, filterByRating, filterByYear };
};
