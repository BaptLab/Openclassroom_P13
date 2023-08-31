import React from "react";

import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Transactions() {
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
