import { useEffect, useState } from "react";
import styles from "../styles/MovieList.module.css";
import MovieListApi from "../apis/MovieListApi";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    MovieListApi().then(res => {
      setMovieList(res);
      setLoad(true);
    });
  }, []);
  return (
    <div className={styles.movie_list}>
      {load
        ? movieList.map(content => {
            return (
              <Link
                to={`/detail/${content.id}`}
                key={content.id}
                className={styles.movie_item}
              >
                <img src={content.medium_cover_image} alt="movie poster" />
                <h3>{content.title}</h3>
              </Link>
            );
          })
        : "Loading.."}
    </div>
  );
};
export default MovieList;
