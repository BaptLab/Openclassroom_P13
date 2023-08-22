import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditButton from "../components/Button/EditButton";
import Account from "../components/account/Account";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Button from "../components/Button/Button";
import { hide } from "../redux/editslice";
import { getUserInfos, updateUserInfos } from "../data/api";
import { setUserNames } from "../redux/userSlice";

const UserPage = () => {
  const dispatch = useDispatch();

  //First we get the User Token from the local storage
  const token = localStorage.getItem("accessToken");

  //We assure that we have values from the store
  const visibility = useSelector((state) => state.edit.visibility);
  const { firstName, lastName } = useSelector((state) => state.user);

  //Temporary values when we edit the userNames
  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);

  useEffect(() => {
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  }, [firstName, lastName]);

  //whenever the token value change (or is loaded in this case), we fetch the userInfos (names) to display
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

  //When a firstName or lastName is submitted, we update the DB and the state according to the API response
  const handleSubmitNames = async () => {
    //we hide the edit input
    dispatch(hide());
    try {
      const updatedUserInfos = await updateUserInfos(
        token,
        editedFirstName,
        editedLastName
      );
      //We update the store with the new values
      dispatch(setUserNames(updatedUserInfos));
    } catch (error) {
      throw error;
    }
  };

  //if we click "cancel", the edit input are back to the value of the store (latest value)
  const handleCancel = () => {
    dispatch(hide());
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
  };

  //we update the temporary state value when the input changes
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
};

export default UserPage;
