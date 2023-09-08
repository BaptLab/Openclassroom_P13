import React, { useRef, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getUserToken } from "../data/api";
import { setUserToken } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [ErrMsg, setErrMsg] = useState(false);

  const setUserNameInput = (e) => {
    setUser(e.target.value);
  };

  const setUserPwdInput = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenReceived = await getUserToken(user, pwd);
      dispatch(setUserToken(tokenReceived));
      setErrMsg(false);
      navigate("/user");
    } catch (error) {
      setErrMsg(true);
      console.log(error);
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form id="sign-in-box" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                ref={userRef}
                onChange={setUserNameInput}
                value={user}
                required
              />
            </div>
            <div className="input-wrapper">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={setUserPwdInput}
                value={pwd}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <div className="err-msg-container">
              <span className={`err-msg ${ErrMsg ? "show" : "hide"}`}>
                The username and/or password is incorrect !
              </span>
            </div>
            <button className="transaction-button">Sign in</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
