import { useMoviesContext } from "../context/MoviesContext";
import { ratingData, releaseYearData } from "../utils/constants";

export const GenreFilter = () => {
  const {
    genreData,
    updateGenre,
    filters: { genre },
  } = useMoviesContext();
  return (
    <select
      className="border p-1 rounded-md text-sm"
      name="genre"
      defaultValue={genre}
      onChange={(e) => updateGenre(e.target.value)}
    >
      <option value="">All Genre</option>
      {genreData.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};
export const ReleaseYearFilter = () => {
  const {
    updateYear,
    filters: { year },
  } = useMoviesContext();
  return (
    <select
      className="border p-1 rounded-md text-sm"
      name="year"
      value={year}
      onChange={(e) => updateYear(e.target.value)}
    >
      <option value="">Release Year </option>
      {releaseYearData?.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};

export const RatingFilter = () => {
  const {
    updateRating,
    filters: { rating },
  } = useMoviesContext();
  return (
    <select
      className="border p-1 rounded-md text-sm"
      name="rating"
      value={rating}
      onChange={(e) => updateRating(e.target.value)}
    >
      <option value="">Rating </option>
      {ratingData?.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};
