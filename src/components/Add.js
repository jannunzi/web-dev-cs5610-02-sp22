import {useParams} from "react-router-dom";

const Add = () => {
  let {a, b} = useParams();
  a = parseInt(a);
  b = parseInt(b);
  return(
    <div>
      <h1>Add</h1>
      {/*{JSON.stringify(params)}*/}
      {a} + {b} = {a + b}
    </div>
  )
}
export default Add;