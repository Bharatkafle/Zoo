import Home from "../routes/Home";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <h1>{props.name}</h1>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
