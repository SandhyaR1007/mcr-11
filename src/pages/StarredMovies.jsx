import { MovieCard } from "../components";
import { useMoviesContext } from "../context/MoviesContext";

const StarredMovies = () => {
  const { starredMoviesList } = useMoviesContext();
  return (
    <div>
      <main className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
        {starredMoviesList?.length > 0 ? (
          starredMoviesList?.map((data) => (
            <MovieCard movieData={data} key={data?.id} />
          ))
        ) : (
          <h1 className="p-4 text-lg font-semibold">No Movies Found</h1>
        )}
      </main>
    </div>
  );
};

export default StarredMovies;
