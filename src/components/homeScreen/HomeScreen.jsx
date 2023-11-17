import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import { useGetNetflixOriginalsQuery } from "../../features/api/api";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        getMovies={useGetNetflixOriginalsQuery}
        isLargeMovies
      />
      <Row title="NETFLIX ORIGINALS" getMovies={useGetNetflixOriginalsQuery} />
      <Row title="NETFLIX ORIGINALS" getMovies={useGetNetflixOriginalsQuery} />
      <Row title="NETFLIX ORIGINALS" getMovies={useGetNetflixOriginalsQuery} />
      <Row title="NETFLIX ORIGINALS" getMovies={useGetNetflixOriginalsQuery} />
    </div>
  );
};

export default HomeScreen;
