import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfos } from "../data/api";
import { setUserNames } from "../redux/userSlice";

function Transactions() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

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
  return (
    <React.Fragment>
      <Header signin="true" />
      <div className="balance-section">
        <span className="account-text account-name">
          {"Argent Bank Checking (x8349)"}
        </span>
        <span className="account-text account-balance">{"$2,082.79"}</span>
        <span className="account-text balance-description">Available Balance</span>
      </div>
      <div className="transaction-container">
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Transactions;
