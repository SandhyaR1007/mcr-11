import React from "react";

const MovieCard = ({ movieData }) => {
  return (
    <div className=" shadow-md rounded-md flex flex-col gap-2">
      <section className="h-2/3">
        <img
          src={movieData?.imageURL}
          alt={movieData?.title}
          className="w-full h-full object-cover"
        />
      </section>
      <section className="h-1/3 px-3 text-center flex flex-col ">
        <h1 className="text-lg font-bold">{movieData?.title}</h1>
        <p>{movieData?.summary}</p>
        <section className="flex justify-between pt-2 ">
          <button className="bg-neutral-800 text-white text-sm px-2 py-1 rounded-md">
            Star
          </button>
          <button className="bg-neutral-800 text-white text-sm px-2 py-1 rounded-md">
            Add to watchlist
          </button>
        </section>
      </section>
    </div>
  );
};

export default MovieCard;
