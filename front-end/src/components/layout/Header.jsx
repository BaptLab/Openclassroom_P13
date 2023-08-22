import React from "react";
import logo from "../../assets/images/img/argentBankLogo.png";
import logout from "../../assets/images/img/icon-logout.png";
import HandleLogout from "../events/HandleLogout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfos } from "../../data/api";
import { setUserNames } from "../../redux/userSlice";

function Header(props) {
  const token = localStorage.getItem("accessToken");

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataOnLoad = async () => {
      try {
        const userInfosReceived = await getUserInfos(token);
        //we set the values in the store to access it anywhere
        dispatch(setUserNames(userInfosReceived));
      } catch (error) {
        throw error;
      }
    };
    getDataOnLoad();
  }, [token, dispatch]);

  const firstName = useSelector((state) => state.user.firstName);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {props.signin ? (
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
