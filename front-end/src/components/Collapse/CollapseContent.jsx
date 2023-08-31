import React, { useState } from "react";

import pencilPng from "../../assets/images/img/pencil.png";

function CollapseContent(props) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleVisibleInput = () => {
    setPreviousValue(inputValue);
    setInputVisible(true);
  };

  const handleOkButtonClick = () => {
    setPreviousValue(inputValue);
    setInputVisible(false);
  };

  const handleCancelButtonClick = () => {
    setInputValue(previousValue);
    setInputVisible(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="collapse-content-text-group">
        <span className="collapse-content-text transaction-category">
          Transaction Type :{" "}
        </span>
        <span className="collapse-content-text transaction-type">Electronic</span>
      </div>
      <div className="collapse-content-text-group">
        <span className="collapse-content-text transaction-category">Category : </span>
        <span className="collapse-content-text transaction-type">
          <select name="categories" className="custom-select">
            <option value="Food">Food</option>
            <option value="Bus">Bus</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </div>
      <div className="collapse-content-text-group notes-group">
        <span className="collapse-content-text transaction-category">Notes : </span>
        <span className="collapse-content-text transaction-type notes-type">
          {isInputVisible ? (
            <div className="input-notes">
              <input type="text" value={inputValue} onChange={handleInputChange} />
              <button className="input-btn" onClick={handleOkButtonClick}>
                Ok
              </button>
              <button className="input-btn" onClick={handleCancelButtonClick}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <span className="inputValue">{inputValue}</span>
              <img onClick={handleVisibleInput} src={pencilPng} alt="Edit Notes" />
            </>
          )}
        </span>
      </div>
    </React.Fragment>
  );
}

export default CollapseContent;
