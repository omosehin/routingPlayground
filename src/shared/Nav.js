import React from "react";
import { Link } from "react-router-dom";
const Nav = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">{props.Home}</Link>
        </li>
        <li>
          <Link to="/AboutUs">{props.About}</Link>
        </li>
        <li>
          <Link to="/Blog">{props.Blog}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
