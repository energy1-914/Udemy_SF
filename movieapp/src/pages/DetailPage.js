import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <MovieDetail id={id} />
    </div>
  );
};
export default DetailPage;
