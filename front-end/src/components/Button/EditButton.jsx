import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, show } from "../../redux/editslice";

const EditButton = (props) => {
  const visibility = useSelector((state) => state.edit.visibility);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(visibility ? hide() : show());
  };

  return (
    <button onClick={handleClick} className="edit-button">
      {props.action}
    </button>
  );
};

export default EditButton;
