import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList/PostList";
import Pagination from "../components/Pagination/Pagination";

import styles from "../components/EditPage/EditPage.module.scss";
import {setEditMode} from "../redux/actions/actions";
import {useDispatch} from "react-redux";
import ModalExit from "../components/ModalExit/ModalExit";
import ModalAddPost from "../components/ModalAddPost/ModalAddPost";

console.log(styles);

const EditPage = ({match}) => {
  //state
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalAddPost, setIsOpenModalAddPost] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (match.path === '/edit-page') {
      dispatch(setEditMode())
    }
  }, [])

  return (
    <>
      <div className={styles.btnWrapper}>
        <button
          className="add-post edit-btn"
          onClick={() => setIsOpenModalAddPost(true)}
        >
          Добавить статью
        </button>

        <button
          className="exit-post edit-btn"
          onClick={() => setIsOpenModal(true)}
        >
          Выйти из редактирования
        </button>
      </div>


      <PostList/>
      <Pagination/>

      <ModalExit isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <ModalAddPost isOpenModal={isOpenModalAddPost} setIsOpenModal={setIsOpenModalAddPost}/>

    </>
  );
};

export default EditPage;