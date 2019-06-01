import React from 'react';

import './header.css';


const Header = () => {
  return (
    <div className="header d-flex">
      <h2>
        <a href="#/">
          StarDB
        </a>
      </h2>
      <ul className="d-flex">
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Planets</a>
        </li>
        <li>
          <a href="#/starships">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;