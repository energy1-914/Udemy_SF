import { api_key } from "./util/api_key";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const city = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const divWeather = document.querySelector(".weather");

      divWeather.innerHTML = `${city} <br> ${temp}°C <br/> ${weather}`;
    });
};

const success = res => {
  const lat = res.coords.latitude;
  const lon = res.coords.longitude;
  getWeather(lat, lon);
};

const error = err => {
  console.log(err);
};

navigator.geolocation.getCurrentPosition(success, error);
