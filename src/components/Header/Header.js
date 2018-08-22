import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./header.css";

const HeaderNav = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }}>
      <Menu.Item>
        <Link to={`/`}>Главная</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`/sale`}>Продать</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`/signin`}>Войти</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderNav;
