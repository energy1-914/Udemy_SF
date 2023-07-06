import styles from "styles/SeatPage.module.css";
import Header from "components/Header";
import { useState } from "react";

const SeatPage = () => {
  const numberSeats = 20;
  const seatList = [];
  const [choose, setChoose] = useState([]);
  // const toggle = i => {
  //   if (choose.includes(i)) {
  //     setChoose(() => choose.filter(x => x !== i));
  //   } else {
  //     setChoose(() => choose.push(i));
  //   }
  //   console.log(choose);
  // };
  const getSeat = () => {
    for (let i = 0; i < numberSeats; i++) {
      seatList.push(
        <div
        className={styles.seat}
          // className={choose.includes(i) ? styles.seat_chosen : styles.seat}
          key={i}
          // onClick={() => toggle(i)}
        />
      );
    }
    return seatList;
  };
  return (
    <div className={styles.seat_page}>
      <div className={styles.background} />
      <Header />
      <div className={styles.seats}>{getSeat()}</div>
    </div>
  );
};
export default SeatPage;
