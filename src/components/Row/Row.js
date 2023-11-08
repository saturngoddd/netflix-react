import React, { useEffect, useState } from "react";
import "./Row.css";
const Row = ({ title, getMovies, isLargeMovies }) => {
  const [movies, setMovies] = useState([]);
  const { data, isSuccess } = getMovies();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    isSuccess && setMovies(data.results);
  }, [getMovies, isSuccess]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeMovies && "row__largePoster"}`}
              src={`${baseUrl}${
                isLargeMovies ? movie.poster_path : movie.backdrop_path
              }`}
              alt="movies"
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
