import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButton(props) {
  const navigate = useNavigate();
  const handleRedirect = (e) => {
    e.preventDefault();
    navigate(props.url);
  };

  return (
    <button className="transaction-button" onClick={handleRedirect}>
      {props.action}
    </button>
  );
}

export default RedirectButton;
