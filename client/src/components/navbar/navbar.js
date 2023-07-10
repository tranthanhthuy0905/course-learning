// import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {

  return (
    <nav>
      <ul>
        <li>
          <img className="avatar" src="" alt="avatar" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <Link to="/milestones">Milestones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
