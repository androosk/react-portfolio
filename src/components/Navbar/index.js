import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { setContactSelected } = props;

  return (
    <header>
      <p>andrew tirpok</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-1">
            <a href="#contact">
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
