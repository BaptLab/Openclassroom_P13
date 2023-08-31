import React from "react";

function TransactionHeader(props) {
  return (
    <React.Fragment>
      <span className="collapse-text collapse-data">June 20th, 2020</span>
      <span className="collapse-text collapse-description">Golden Sun Bakery</span>
      <span className="collapse-text collapse-amount">$5.00</span>
      <span className="collapse-text collapse-balance">$2082.79</span>
    </React.Fragment>
  );
}

export default TransactionHeader;
