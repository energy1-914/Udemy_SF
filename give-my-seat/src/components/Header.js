import useMyContext from "hooks/useMyContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/Header.module.css";
import heartIcon from "images/heart.png";
import instagramIcon from "images/instagram.png";

const Header = React.memo(() => {
  const item = useMyContext().item;
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <input className={styles.button} type="button" value="<" onClick={() => navigate(-1)} />
      <h3>{item.name}</h3>
      <div className={styles.icons}>
        <img src={instagramIcon} alt="instagramIcon" />
        <img src={heartIcon} alt="heartIcon" />
      </div>
    </div>
  );
});

export default Header;
