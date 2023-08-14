import { useState } from "react";
import chevron from "../../assets/images/img/chevron-icon.png";
import CollapseContent from "./CollapseContent";
import TransactionHeader from "./TransactionHeader";

function Collapse(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse-container `}>
      <div className="collapse-header">
        <img
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className={`chevron ${!open ? "chevron-down" : "chevron-up"}`}
          alt="collapse"
          src={chevron}
        ></img>
        <div className="header-infos">
          <TransactionHeader />
        </div>
      </div>
      <div
        className={`collapse-content-container ${
          !open ? "collapse-close" : "collapse-open"
        }`}
      >
        <CollapseContent />
      </div>
    </div>
  );
}

export default Collapse;
