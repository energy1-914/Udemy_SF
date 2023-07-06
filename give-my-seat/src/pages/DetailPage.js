import { useNavigate } from "react-router-dom";
import styles from "styles/DetailPage.module.css";
import cafe from "images/cafe.png";
import useMyContext from "hooks/useMyContext";
import Header from "components/Header";

const DetailPage = () => {
  const navigate = useNavigate();
  const item = useMyContext().item;

  return (
    <div className={styles.detail_page}>
      <Header />
      <div className={styles.content}>
        <img src={cafe} alt="cafe-img" />
        <div className={styles.group}>
          <div>
            <p>{item.address}</p>
            <p>{item.open}</p>
            <p>{item.call}</p>
          </div>
          <button onClick={() => navigate(`/${item.name}/seat`)}>
            좌석 현황
          </button>
        </div>
        <div id={styles.menu}>
          <h3>메뉴</h3>
          <div className={styles.menu}>
            <p>아메리카노 : 1000원</p>
            <p>카페라떼 : 1000원</p>
            <p>바닐라라떼 : 1000원</p>
            <p>티 : 1000원</p>
            <p>아메리카노 : 1000원</p>
            <p>아메리카노 : 1000원</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
