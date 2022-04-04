import tuiterReducer from "./tuiter-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import TuitList from "./TuitList";

const store = createStore(tuiterReducer);

const TuiterApp = () => {
  return(
    <div>
      <Provider store={store}>
        <h1>Tuiter</h1>
        <TuitList/>
      </Provider>
    </div>
  );
};
export default TuiterApp;