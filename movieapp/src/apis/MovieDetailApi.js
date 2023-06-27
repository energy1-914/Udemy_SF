import axios from "axios";

const MovieDetailApi = async (id) => {
  const data =  await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  return await data['data']['data']['movie'];
};

export default MovieDetailApi;
