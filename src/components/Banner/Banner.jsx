import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useGetNetflixOriginalsQuery } from "../../features/api/api";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const { data, isLoading, isError, isSuccess } = useGetNetflixOriginalsQuery();
  useEffect(() => {
    isSuccess &&
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
  }, [data, isSuccess]);
  const truncate = (str, limit) => {
    return str?.length > limit ? str?.substr(0, limit) + "..." : str;
  };
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: isSuccess
          ? `url(
          "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`
          : `url("https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.origin_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
