import React from 'react';

import "./EditBtn.scss";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setEditMode} from "../../redux/actions/actions";

const EditBtn = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to={"/edit-page"}
      className="edit-btn"
      onClick={() => dispatch(setEditMode())}
    >
      Режим редактирования
    </Link>
  );
};

export default EditBtn;