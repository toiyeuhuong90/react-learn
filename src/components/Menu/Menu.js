import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Menu.css";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: false
  },
  {
    name: "Text Color",
    to: "/txt-color",
    exact: false
  },
  {
    name: "Form",
    to: "/form",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
      <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => {
              var active = match ? 'active' : '';
              return (
                  <li className={active}>
                      <Link to={to}>
                          {label}
                      </Link>
                  </li>
              );
          }}
      />
  );
};

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
        </div>
      </nav>
    );
  }

  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
