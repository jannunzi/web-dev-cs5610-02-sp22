import {BrowserRouter, Link} from "react-router-dom";

const Nav = () => {
  return(
    <div className={`list-group`}>
      <Link to="/labs" className="list-group-item">Labs</Link>
      <Link to="/tuiter" className="list-group-item">Tuiter</Link>
      <Link to="/hello" className="list-group-item">Hello</Link>
      <Link to="/search" className="list-group-item">Omdb</Link>
      <Link to="/details" className="list-group-item">Details</Link>
      <Link to="/signup" className="list-group-item">Signup</Link>
      <Link to="/signin" className="list-group-item">Signin</Link>
      <Link to="/profile" className="list-group-item">Profile</Link>
      <br/>
    </div>
  );
};
export default Nav;