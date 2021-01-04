import React from 'react';

import style from "./Pagination.module.scss"

const Pagination = () => {
  return (
    <div  className={style.pagination}>
      <button className={style.paginationBtn}>prev</button>
      <button className={style.paginationBtn}>1</button>
      <button className={style.paginationBtn}>2</button>
      <button className={style.paginationBtn}>3</button>
      <button className={style.paginationBtn}>next</button>
    </div>
  );
};

export default Pagination;