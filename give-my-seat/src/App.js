import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";
import ListPage from "pages/ListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import cafePreview from "images/cafe-preview.png";
import cafePreview1 from "images/cafe-preview1.png";
import SeatPage from "pages/SeatPage";

export const MyContext = createContext();

function App() {
  const list = [
    {
      name: "카페여기",
      address: "서울시 마포구 와우산로 유데미 카페",
      open: "평일, 토요일 10:00 ~ 22:00",
      call: "010-1234-5678",
      img: cafePreview,
    },
    {
      name: "카페저기",
      address: "서울시 동작구 상도로 유데미 카페",
      open: "평일, 토요일 10:00 ~ 22:00",
      call: "010-1234-5678",
      img: cafePreview1,
    },
  ];

  return (
    <MyContext.Provider value={list}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/:name" element={<DetailPage />} />
          <Route path="/:name/seat" element={<SeatPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
