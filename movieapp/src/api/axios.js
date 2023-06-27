import axios from "axios";

const getMovieList = async () => {
  try {
    const data = await axios.get("https://yts.mx/api/v2/list_movies.json");
    return await data["data"]["data"]["movies"];
  } catch (e) {
    console.log("error :", e);
  }
};
export default getMovieList;
