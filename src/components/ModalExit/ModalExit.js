import React from 'react';


import style from "./ModalExit.module.scss";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {exitEditMode} from "../../redux/actions/actions";
import PropTypes from "prop-types";

const ModalExit = ({isOpenModal, setIsOpenModal}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${style.overlay} ${isOpenModal ? style.active : ''}`}
        onClick={() => setIsOpenModal(false)}
      />

      <div className={`${style.modal} ${isOpenModal ? style.active : ''}`}>
        <h4 className={style.title}>Вы уверены что хотите выйти?</h4>
        <div className={style.btns}>
          <div
            className={style.btn}
            onClick={() => setIsOpenModal(false)}
          >Закрыть
          </div>
          <Link
            to="/"
            className={style.btn}
            onClick={() => {
              setIsOpenModal(false);
              dispatch(exitEditMode());
            }}
          >Уйти</Link>
        </div>
      </div>
    </>
  );
};

ModalExit.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
}

export default ModalExit;