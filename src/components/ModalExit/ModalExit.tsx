import React from 'react';


import style from "./ModalExit.module.scss";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {exitEditMode} from "../../redux/actions/actions";


type PropsType = {
    isOpenModal: boolean
    setIsOpenModal: (isOpen: boolean) => void
}

const ModalExit: React.FC<PropsType> = ({isOpenModal, setIsOpenModal}) => {
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

export default ModalExit;