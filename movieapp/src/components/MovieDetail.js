import { useEffect, useState } from "react";
import MovieDetailApi from "../apis/MovieDetailApi";

const MovieDetail = ({ id }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    MovieDetailApi(id).then(res => {
      console.log(res);
      setMovieDetail(res);
    });
  }, []);

  return (
    <div>
      <img src={movieDetail.medium_cover_image} alt="movie poster" />
      <h2>{movieDetail.title}</h2>
      <p>평점 : {movieDetail.rating}점</p>
      <p>개봉일 : {movieDetail.year}년</p>
    </div>
  );
};
export default MovieDetail;
