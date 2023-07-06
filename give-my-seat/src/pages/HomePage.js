import logo from "images/logo.png";
import mainImg from "images/main.png";

const HomePage = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h2>카카오 로그인으로 시작하기</h2>
      <img src={mainImg} alt="main-img" />
    </div>
  );
};
export default HomePage;
