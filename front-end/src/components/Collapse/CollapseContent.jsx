import React from "react";

function CollapseContent(props) {
  return (
    <React.Fragment>
      <div className="collapse-content-text-group">
        <span className="collapse-content-text transaction-categorie">
          Transaction Type :
        </span>
        <span className="collapse-content-text transaction-type">Electronic</span>
      </div>
      <div className="collapse-content-text-group">
        <span className="collapse-content-text transaction-categorie">Categorie :</span>
        <span className="collapse-content-text transaction-type">Food</span>
      </div>
      <div className="collapse-content-text-group">
        <span className="collapse-content-text transaction-categorie">Notes :</span>
        <span className="collapse-content-text transaction-type">*pencil icon*</span>
      </div>
    </React.Fragment>
  );
}

export default CollapseContent;
