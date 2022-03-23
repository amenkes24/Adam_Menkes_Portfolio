import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <header data-testid="header" className="flex-row px-1">
        <Link to="/">
            <h2>Adam Menkes</h2>
        </Link>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
              <Link to="/about">
              About Me
              </Link>
          </li>
          <li className={"mx-2"}>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className={"mx-2"}>
          <Link to="/contact">Contact</Link>
          </li>
          <li className={"mx-2"}>
              <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;