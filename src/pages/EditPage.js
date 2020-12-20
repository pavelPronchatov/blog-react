import React from 'react';
import PostList from "../components/PostList/PostList";
import Pagination from "../components/Pagination/Pagination";


const EditPage = () => {
  return (
    <>
      <div className="btn__wrapper">
        <button className="add-post edit-btn">
          Добавить статью
        </button>

        <button className="exit-post edit-btn">
          Выйти из редактирования
        </button>
      </div>


      <PostList/>
      <Pagination/>
    </>
  );
};

export default EditPage;