export const useSearch = () => {
  const searchMovies = (moviesData, searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return searchQuery?.length > 0
      ? moviesData?.filter(
          ({ title, cast, director }) =>
            title?.toLowerCase()?.includes(lowerCaseQuery) ||
            cast.some((data) =>
              data?.toLowerCase()?.includes(lowerCaseQuery)
            ) ||
            director?.toLowerCase()?.includes(lowerCaseQuery)
        )
      : moviesData;
  };
  return { searchMovies };
};
