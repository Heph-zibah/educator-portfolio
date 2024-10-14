import React from 'react'
import { navLinks } from './Data'
import { Link } from "react-scroll";

const footer = () => {
  return (
    <>
      <footer>
        <h1>Lucid Nelson</h1>
        <ul>
          {navLinks.map((item) => {
            const { id, url, link } = item;
            return (
              <li key={id}>
                <Link to={url} smooth={true} duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        <p>All Rights Reserved</p>
      </footer>
    </>
  );
};

export default footer