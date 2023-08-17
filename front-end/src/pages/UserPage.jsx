import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import EditButton from "../components/Button/EditButton";
import Account from "../components/account/Account";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Button from "../components/Button/Button";
import { display, hide } from "../redux/editslice";

function UserPage() {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.edit.visibility);

  const token = localStorage.getItem("AccessToken");

  const [errMessage, setErrMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);

  useEffect(() => {
    setErrMessage("");
  }, []);

  useEffect(() => {
    const getNameInfos = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const data = response?.data?.body;
        setFirstName(data.firstName);
        setLastName(data.lastName);
      } catch (err) {
        handleErrorResponse(err);
      }
    };

    getNameInfos();
  }, [token]);

  const handleErrorResponse = (err) => {
    if (!err?.response) {
      setErrMessage("No server response");
    } else if (err.response?.status === 400) {
      setErrMessage("Invalid fields");
    } else if (err.response?.status === 500) {
      setErrMessage("Internal server error");
    } else {
      setErrMessage("Login failed");
    }
  };

  const handleCancel = () => {
    dispatch(hide());
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  };

  const handleSubmitNames = async () => {
    dispatch(hide());
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: editedFirstName,
          lastName: editedLastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFirstName(response.data.body.firstName);
      setLastName(response.data.body.lastName);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
  };

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
                placeholder="First name"
                value={editedFirstName}
              />
              <input
                type="text"
                id="lastName"
                required
                onChange={handleLastNameChange}
                minLength={2}
                maxLength={15}
                placeholder="Last name"
                value={editedLastName}
              />
            </div>
            <div className="edit-name-button-section">
              <button onClick={handleSubmitNames} className="edit-btn save-btn">
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
