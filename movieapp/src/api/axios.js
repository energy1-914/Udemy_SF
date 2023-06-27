import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/axios.module.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await axios.get("https://yts.mx/api/v2/list_movies.json");
        setMovieList(data["data"]["data"]["movies"]);
      } catch (e) {
        console.log("error :", e);
      }
    };
    getMovieList();
  }, []);
  console.log(movieList);
  return (
    <div className={styles.movie_list}>
      {movieList.map(content => {
        return (
          <div key={content.id} className={styles.movie_item}>
            <img src={content.medium_cover_image} alt="movie poster" />
            <h3>{content.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
