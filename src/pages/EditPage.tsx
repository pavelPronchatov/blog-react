import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList/PostList";
import Pagination from "../components/Pagination/Pagination";

import styles from "../components/EditPage/EditPage.module.scss";
import {setEditMode, setModalPostAdd} from "../redux/actions/actions";
import {useDispatch} from "react-redux";
import ModalExit from "../components/ModalExit/ModalExit";
import ModalAddPost from "../components/ModalAddPost/ModalAddPost";


type PropsType = {
    match: any
}

const EditPage: React.FC<PropsType> = ({match}) => {
  //state
  const [isOpenModal, setIsOpenModal] = useState(false);


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
          onClick={() => dispatch(setModalPostAdd(true))}
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
      <ModalAddPost/>

    </>
  );
};

export default EditPage;