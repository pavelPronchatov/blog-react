import React from 'react';

import "./Pagination.scss"

const Pagination = () => {
  return (
    <div  className="pagination">
      <button className="pagination__btn pagination__btn--prev">prev</button>
      <button className="pagination__btn">1</button>
      <button className="pagination__btn">2</button>
      <button className="pagination__btn">3</button>
      <button className="pagination__btn pagination__btn--next">next</button>
    </div>
  );
};

export default Pagination;