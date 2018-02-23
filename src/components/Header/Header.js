import React, { Component } from "react";
import "./Header.css";
import { images } from "./../assets/index";
import Menu from "./../Menu/Menu";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <span>Keep your mind on shopping. We are always be here for you.</span>
      </div>
      <div className="header-top-right">
        <span className="box-header-login">
          <i className="fa fa-sign-in" aria-hidden="true" />Login
        </span>
        <a>
          <i className="fa fa-user" aria-hidden="true" />Sign up
        </a>
      </div>
    </div>
  );
};
const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="logo-default">
        <a className="logo" href='/'>
          <img src={images.default.logo} />
        </a>
      </div>
      <div className="filter">
        <form className="form-inline" role="search">
          <div className="form-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <HeaderTop />
          <HeaderBottom />
        </div>
        <Menu />
      </div>
    );
  }
}

export default Header;
