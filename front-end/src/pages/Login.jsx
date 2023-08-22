import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/updateAuthSlice";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { getUserToken } from "../data/api";
import { setUserToken } from "../redux/userSlice";

function Login() {
  const dispatch = useDispatch();
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMesg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenReceived = await getUserToken(user, pwd);
      console.log(tokenReceived);
      localStorage.setItem("accessToken", tokenReceived);
      window.location.replace("/user");
    } catch (error) {
      // Handle error here
    }

    /* } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
        console.log(errMesg);
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid fields");
        console.log(errMesg);
      } else if (err.response?.status === 500) {
        setErrMsg("Internal server error");
        console.log(errMesg);
      } else {
        setErrMsg("Login failed");
        console.log(errMesg);
      }
    } */
  };

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
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
                required
              />
            </div>
            <div className="input-wrapper">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <button className="transaction-button">Sign in</button>
            {/* <Button>
              Sign in
              <RedirectButton action="Sign in" url="/user" />
            </Button> */}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
