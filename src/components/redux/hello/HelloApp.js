import helloReducer from "./hello-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import HelloComponent from "./HelloComponent";
import SomeIntermediateComponent from "./SomeIntermediateComponent";

const store = createStore(helloReducer);

const HelloApp = () => {
  return(
    <div>
      <Provider store={store}>
        <SomeIntermediateComponent/>
      </Provider>
    </div>
  );
}
export default HelloApp;