import {
  GenreFilter,
  MovieCard,
  RatingFilter,
  ReleaseYearFilter,
} from "../components";
import { useMoviesContext } from "../context/MoviesContext";

const MovieListing = () => {
  const { filteredMovies } = useMoviesContext();
  return (
    <div className="p-5">
      <header className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Movies</h1>
        <GenreFilter />
        <ReleaseYearFilter />
        <RatingFilter />
        <button className="bg-neutral-900 text-sm text-white rounded-md px-2 py-1">
          Add a Movie
        </button>
      </header>
      <main className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
        {filteredMovies?.length > 0 ? (
          filteredMovies?.map((data) => (
            <MovieCard movieData={data} key={data?.id} />
          ))
        ) : (
          <h1 className="p-4 text-lg font-semibold">No Movies Found</h1>
        )}
      </main>
    </div>
  );
};

export default MovieListing;
