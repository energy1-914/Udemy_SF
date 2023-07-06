import heartIcon from "images/heart.png";
import { useContext } from "react";
import { MyContext } from "App";
import { useNavigate } from "react-router-dom";
import styles from "styles/ListPage.module.css";

const ListPage = () => {
  const navigate = useNavigate();
  const list = useContext(MyContext);

  return (
    <div className={styles.list_page}>
      <div className={styles.title}>구독 리스트 </div>
      <div className={styles.list}>
        {list.map((x, i) => {
          return (
            <div
              key={i}
              className={styles.list_item}
              onClick={() => navigate(`/${x.name}`)}
            >
              <img src={x.img} alt="cafe-preview" />
              <div className={styles.list_item_text}>
                <div className={styles.sub_title}>
                  <div>{x.name}</div>
                  <img src={heartIcon} alt="heartIcon" />
                </div>
                <div className={styles.address}>{x.address}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListPage;
