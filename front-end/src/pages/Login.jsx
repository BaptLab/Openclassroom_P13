import Button from "../components/Button/Button";
import RedirectButton from "../components/Button/RedirectButton";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../redux/store/updateAuthSlice";
import { redirect } from "react-router-dom";
const Login_URL = "http://localhost:3001/api/v1/user/login";

function Login() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMesg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(Login_URL, JSON.stringify({ email: user, password: pwd }));
    try {
      const response = await axios.post(
        Login_URL,
        JSON.stringify({ email: user, password: pwd }),
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.body?.token;
      localStorage.setItem("AccessToken", accessToken);

      //vide les champs
      setUser("");
      setPwd("");
      //change the state of the token which we will use in another page
      dispatch(update(accessToken));
      //Redirect to dashboard
      window.location.replace("/user");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid Fields");
      } else if (err.response?.status === 500) {
        setErrMsg("internal server error");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="page-container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form id="sign-in-box" onSubmit={HandleSubmit}>
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
