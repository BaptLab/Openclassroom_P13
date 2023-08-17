import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Transactions() {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const accountName = "Argent Bank Checking (x8349)";
  const accountBalance = "$2,082.79";
  const balanceDescription = "Available Balance";

  const renderCollapseItems = (count) => {
    const collapses = [];
    for (let i = 0; i < count; i++) {
      collapses.push(<Collapse key={i} />);
    }
    return collapses;
  };

  return (
    <React.Fragment>
      <Header signin="true" />
      <div className="balance-section">
        <span className="account-text account-name">{accountName}</span>
        <span className="account-text account-balance">{accountBalance}</span>
        <span className="account-text balance-description">{balanceDescription}</span>
      </div>
      <div className="transaction-container">{renderCollapseItems(6)}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Transactions;
