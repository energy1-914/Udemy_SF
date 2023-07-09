import logo from "images/logo.png";
import mainImg from "images/main.png";
import { useNavigate } from "react-router-dom";
import styles from "styles/HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homepage}>
      <img src={logo} alt="logo" />
      <button className={styles.button} onClick={() => navigate("/login")}>Google 로그인하기</button>
      <img src={mainImg} alt="main-img" />
    </div>
  );
};
export default HomePage;
