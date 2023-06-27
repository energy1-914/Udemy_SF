import { useEffect, useState } from "react";
import styles from "../styles/MovieList.module.css";
import getMovieList from "../api/axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then(res => setMovieList(res));
  }, []);
  return (
    <div className={styles.movie_list}>
      {movieList.length > 0
        ? movieList.map(content => {
            return (
              <div key={content.id} className={styles.movie_item}>
                <img src={content.medium_cover_image} alt="movie poster" />
                <h3>{content.title}</h3>
              </div>
            );
          })
        : "Loading.."}
    </div>
  );
};
export default MovieList;
