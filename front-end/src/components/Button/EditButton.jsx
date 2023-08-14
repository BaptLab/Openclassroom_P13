import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { display, hide } from "../../redux/editslice";

function EditButton(props) {
  const visibility = useSelector((state) => state.edit.visibility);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(visibility ? hide() : display());
  };

  return (
    <button onClick={handleClick} className="edit-button">
      {props.action}
    </button>
  );
}

export default EditButton;
