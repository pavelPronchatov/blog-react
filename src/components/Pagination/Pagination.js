import React, {useEffect} from 'react';

import style from "./Pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPage, changePostsPerPage} from "../../redux/actions/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.editReducer.posts);
  const currentPage = useSelector(state => state.editReducer.currentPage);
  const pages = [];

  useEffect(() => {
    if (posts.length > 0) {
      dispatch(changePostsPerPage());
    }
  }, [posts, currentPage]);

  for (let i = 1; i <= Math.ceil(posts.length / 5); i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div  className={style.pagination}>
      <button
        className={style.paginationBtn}
        onClick={() => {
          if (currentPage > 1) {
            dispatch(changeCurrentPage( currentPage - 1));
          }
        }}
      >prev</button>
      {
        pages.map(el => (
          <button
            key={el}
            className={style.paginationBtn}
            onClick={() => {
              dispatch(changeCurrentPage(+el));
              dispatch(changePostsPerPage());
            }}
          >{el}</button>
        ))
      }
      <button
        className={style.paginationBtn}
        onClick={() => {
          if (currentPage < pages[pages.length - 1]) {
            dispatch(changeCurrentPage(currentPage + 1));
          }
        }}
      >next</button>
    </div>
  );
};

export default Pagination;