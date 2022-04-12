import {BrowserRouter, Link} from "react-router-dom";

const Nav = () => {
  return(
    <div className={`list-group`}>
      <Link to="/labs" className="list-group-item">Labs</Link>
      <Link to="/tuiter" className="list-group-item">Tuiter</Link>
      <Link to="/hello" className="list-group-item">Hello</Link>
      <Link to="/search" className="list-group-item">Search</Link>
      <Link to="/details" className="list-group-item">Details</Link>
      <br/>
    </div>
  );
};
export default Nav;