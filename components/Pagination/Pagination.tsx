import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPage, changePostsPerPage} from '../../redux/actions/actions';
import { AppStateType } from '../../redux/store';
import st from "./Pagination.module.scss"

const Pagination = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: AppStateType) => state.editReducer.posts);
  const currentPage = useSelector((state: AppStateType) => state.editReducer.currentPage);
  const pages: Array<number> = [];

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
    <div  className={st.pagination}>
      <button
        className={st.paginationBtn}
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
            className={st.paginationBtn}
            onClick={() => {
              dispatch(changeCurrentPage(+el));
              dispatch(changePostsPerPage());
            }}
          >{el}</button>
        ))
      }
      <button
        className={st.paginationBtn}
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