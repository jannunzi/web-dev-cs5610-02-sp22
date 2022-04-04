import logo from './logo.svg';
// import './App.css';
import Labs from "./components/Labs";
import Hello from "./components/hello";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Nav from "./components/nav";
import Add from "./components/Add";
import HelloApp from "./components/redux/hello/HelloApp";
import TuiterApp from "./components/redux/tuiter/TuiterApp";
import UserList from "./components/users/user-list";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/add/:a/:b" element={<Add/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="/hello" element={<HelloApp/>}/>
          <Route path="/tuiter" element={<TuiterApp/>}/>
          <Route path="/users" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
