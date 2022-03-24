import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <header data-testid="header" className="flex-row px-1">
        <Link to="/adam-port/">
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
          <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;