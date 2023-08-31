import { useSelector } from "react-redux";

import logo from "../../assets/images/img/argentBankLogo.png";
import logout from "../../assets/images/img/icon-logout.png";

import HandleLogout from "../events/HandleLogout";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const firstName = useSelector((state) => state.user.firstName);
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <div className="main-nav-logo" onClick={navigateToHome}>
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      {firstName ? (
        <div className="header-right">
          <div className="user-icon">
            <span className="header-user-name">{firstName}</span>
            <i className="fa fa-user-circle fa-lg"></i>
          </div>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={HandleLogout} className="logout">
            <img src={logout} className="logout-btn" alt="Logout Button" />
            <span className="logout-text">Log out</span>
          </a>
        </div>
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
