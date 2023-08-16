import React from "react";
import logo from "../../assets/images/img/argentBankLogo.png";
import logout from "../../assets/images/img/icon-logout.png";
import HandleLogout from "../events/HandleLogout";

function Header(props) {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {props.signin ? (
        <a href="#" onClick={HandleLogout} className="logout">
          <img src={logout} className="logout-btn" alt="Logout Button" />
          <span className="logout-text">Log out</span>
        </a>
      ) : (
        <div>
          <a className="main-nav-item" href="./login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
