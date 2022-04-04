import {useDispatch, useSelector} from "react-redux";

const HelloComponent = () => {
  const message = useSelector((state) => {return state.message})
  const dispatch = useDispatch();
  const changeMessage = () => {
    dispatch({
      type: 'change message',
      newMessage: 'this is the new message'
    })
  }
  return(
    <div>
      <h1>Hello Component</h1>
      <h2>{message}</h2>
      <button onClick={changeMessage}>Change message</button>
    </div>
  );
};
export default HelloComponent;