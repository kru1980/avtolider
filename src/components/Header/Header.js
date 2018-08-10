import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to={`/`}>Главная</Link>
        </li>
        <li>
          <Link to={`/sale`}>Продать</Link>
        </li>
        <li>
          <Link to={`/signin`}>Войти</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
