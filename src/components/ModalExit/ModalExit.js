import React from 'react';

const ModalExit = () => {
  return (
    <div className="modal-exit">
      <h4 className="modal-exit__title">Вы уверены что хотите выйти?</h4>
      <div className="modal-exit__btns">
        <div className="modal-exit__btn">Закрыть</div>
        <div className="modal-exit__btn">Уйти</div>
      </div>
    </div>
  );
};

export default ModalExit;