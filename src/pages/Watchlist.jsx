import { MovieCard } from "../components";
import { useMoviesContext } from "../context/MoviesContext";

const Watchlist = () => {
  const { watchlistMoviesList } = useMoviesContext();
  return (
    <div>
      <h1 className="p-3 text-xl font-bold">Watchlist</h1>
      <main className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
        {watchlistMoviesList?.length > 0 ? (
          watchlistMoviesList?.map((data) => (
            <MovieCard movieData={data} key={data?.id} />
          ))
        ) : (
          <h1 className="p-4 text-lg font-semibold">No Movies Found</h1>
        )}
      </main>
    </div>
  );
};

export default Watchlist;
