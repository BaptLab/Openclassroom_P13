import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditButton from "../components/Button/EditButton";
import Account from "../components/account/Account";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Button from "../components/Button/Button";
import { display, hide } from "../redux/editslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function UserPage() {
  /*   const token = useSelector((state) => state.auth.token);
   */
  const [errMesg, setErrMsg] = useState("");

  useEffect(() => {
    getNameInfos();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, []);

  const token = localStorage.getItem("AccessToken");
  console.log("Token from localStorage:", token);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getNameInfos = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        { headers: { token } },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      console.log(JSON.stringify(response?.data?.body));
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
  const visibility = useSelector((state) => state.edit.visibility);
  const dispatch = useDispatch();

  /*   const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
 */ const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);

  const handleCancel = () => {
    dispatch(hide());
    setEditedFirstName(firstName); // Reset edited first name
    setEditedLastName(lastName); // Reset edited last name
  };

  const handleSubmit = () => {
    dispatch(hide());
    setFirstName(editedFirstName); // Update first name with edited value
    setLastName(editedLastName); // Update last name with edited value
  };

  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
  };
  getNameInfos();

  return (
    <div className="page-container">
      <Header signin="true" />
      <main className="main bg-dark">
        <div className="header">
          <div className={`welcome-back-message ${visibility ? "invisible" : "visible"}`}>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
            <Button>
              <EditButton action="Edit name" />
            </Button>
          </div>
          <div className={`edit-name-section ${visibility ? "visible" : "invisible"}`}>
            <h1 className="welcome">Welcome back</h1>
            <div className="edit-name-input-section">
              <input
                type="text"
                id="firstName"
                required
                onChange={handleFirstNameChange}
                minLength={2}
                maxLength={15}
                placeholder="first name"
                value={editedFirstName} // Display edited first name
              />
              <input
                type="text"
                id="lastName"
                required
                onChange={handleLastNameChange}
                minLength={2}
                maxLength={15}
                placeholder="last name"
                value={editedLastName} // Display edited last name
              />
            </div>
            <div className="edit-name-button-section">
              <button onClick={handleSubmit} className="edit-btn save-btn">
                Save
              </button>
              <button onClick={handleCancel} className="edit-btn cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          balance="$2,082.79"
          type="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          balance="$10,928.42"
          type="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          balance="$184.30"
          type="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
}

export default UserPage;
