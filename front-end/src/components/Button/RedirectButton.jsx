import React from "react";

function RedirectButton(props) {
  const handleRedirect = (e) => {
    e.preventDefault();
    window.location.href = props.url;
  };

  return (
    <button className="transaction-button" onClick={handleRedirect}>
      {props.action}
    </button>
  );
}

export default RedirectButton;
