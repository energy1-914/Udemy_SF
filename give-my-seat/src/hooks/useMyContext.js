import { useContext } from "react";
import { MyContext } from "App";
import { useParams } from "react-router-dom";

const useMyContext = () => {
  const list = useContext(MyContext);
  const params = useParams();
  const item = list.find(x => x.name === params.name);

  return { item };
};
export default useMyContext;
