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
import OmdbSearch from "./screens/omdb-search";
import OmdbDetails from "./screens/omdb-details";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="row">
          <div className="col-2">
            <Nav/>
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/search" element={<OmdbSearch/>}/>
              <Route path="/search/:movieSearch" element={<OmdbSearch/>}/>
              <Route path="/details/:imdbID" element={<OmdbDetails/>}/>
              <Route path="/add/:a/:b" element={<Add/>}/>
              <Route path="/labs" element={<Labs/>}/>
              <Route path="/hello" element={<HelloApp/>}/>
              <Route path="/tuiter" element={<TuiterApp/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
