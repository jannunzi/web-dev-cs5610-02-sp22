import {BrowserRouter, Link} from "react-router-dom";

const Nav = () => {
  return(
    <div className={`list-group`}>
      <Link to="/users" className="list-group-item">Users</Link>
      <Link to="/labs" className="list-group-item">Labs</Link>
      <Link to="/tuiter" className="list-group-item">Tuiter</Link>
      <Link to="/hello" className="list-group-item">Hello</Link>
      <br/>
    </div>
  );
};
export default Nav;