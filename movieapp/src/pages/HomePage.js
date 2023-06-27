import MovieList from "../components/MovieList";
import styles from '../styles/HomePage.module.css'
const HomePage = () => {
  return (
    <div className={styles.homepage}> 
      <MovieList />
    </div>
  );
};
export default HomePage;
