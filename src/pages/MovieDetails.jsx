import { useParams } from "react-router-dom";
import { useMoviesContext } from "../context/MoviesContext";

const MovieDetails = () => {
  const { getMovieDetailsById, toggleStarred, toggleWatchlist } =
    useMoviesContext();
  const { movieId } = useParams();
  const movieDetails = getMovieDetailsById(movieId);

  return (
    <div className="flex  w-[70%] mx-auto p-5 gap-5 shadow-md rounded-md">
      <section>
        <img src={movieDetails?.imageURL} alt={movieDetails?.title} />
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">{movieDetails?.title}</h1>
        <p className="font-semibold">{movieDetails?.summary}</p>
        <p>
          <span>Year:</span>
          <span>{movieDetails?.year}</span>
        </p>
        <p>
          <span>Genre:</span>
          <span>{movieDetails?.genre?.map((data) => data).join(", ")}</span>
        </p>
        <p>
          <span>Rating:</span>
          <span>{movieDetails?.rating}</span>
        </p>
        <p>
          <span>Director:</span>
          <span>{movieDetails?.director}</span>
        </p>
        <p>
          <span>Writer:</span>
          <span>{movieDetails?.writer}</span>
        </p>
        <p>
          <span>Cast:</span>
          <span>{movieDetails?.cast?.map((data) => data).join(", ")}</span>
        </p>
        <section className="flex items-center justify-between p-3">
          <button
            className="bg-neutral-900 text-white px-2 py-1 rounded-md text-sm"
            onClick={() => toggleStarred(movieDetails?.id)}
          >
            {movieDetails?.isStarred ? "Unstar" : "Star"}
          </button>
          <button
            className="bg-neutral-900 text-white px-2 py-1 rounded-md text-sm"
            onClick={() => toggleWatchlist(movieDetails?.id)}
          >
            {movieDetails?.inWatchlist
              ? "Remove from Watchlist"
              : "Add to Watchlist"}
          </button>
        </section>
      </section>
    </div>
  );
};

export default MovieDetails;
