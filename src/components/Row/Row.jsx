import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Row.css";
const Row = ({ title, getMovies, isLargeMovies }) => {
  const [movies, setMovies] = useState([]);
  const { data, isSuccess } = getMovies();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    isSuccess && setMovies(data.results);
  }, [getMovies, isSuccess]);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeMovies ? 8 : 6,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <Slider {...settings} className="row__posters">
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
      </Slider>
    </div>
  );
};

export default Row;
