import React, {useEffect} from 'react';


import style from "./ModalAddPost.module.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addPost, editPost, setIsEditPost, setModalPostAdd} from "../../redux/actions/actions";
import {AppStateType} from "../../redux/store";
import {PostType} from "../../types/types";


type CreatePostType = {
  title: string
  imgLink: string
  text: string

}

const ModalAddPost = () => {
  //redux
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state: AppStateType) => state.editReducer.isModalAddPost);
  const isEditPost = useSelector((state: AppStateType) => state.editReducer.isEditPost);
  const editPostItem = useSelector((state: AppStateType) => state.editReducer.editPost);

  const {register, handleSubmit, reset, errors, setValue} = useForm<CreatePostType>();

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (isEditPost) {
      setValue('title', editPostItem.title);
      setValue('imgLink', editPostItem.imgLink);
      setValue('text', editPostItem.text);
    } else reset();
  }, [editPostItem, isEditPost]);


  const onSubmit = (data: PostType) => {
    if (isEditPost) {
      dispatch(editPost(editPostItem.id, data));
      dispatch(setIsEditPost(false));
    } else {
      dispatch(addPost(data));
    }
    console.log(data);
    reset();
  }

  return (
    <div className={`${style.modal} ${isOpenModal ? style.active : ''}`}>
      <Link to="/" className={style.title}>Blog</Link>
      <form
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.btns}>
          <button
            type="button"
            className={`${style.btn} ${style.btnBack}`}
            onClick={() => {
              dispatch(setModalPostAdd(false));
              dispatch(setIsEditPost(false));

            }}
          />
          {
            isEditPost ? (
              <button
                type="submit"
                className={style.btn}
                onClick={() => dispatch(setModalPostAdd(false))}
              >Изменить
              </button>
            ) : (
              <button
                type="submit"
                className={style.btn}
                onClick={() => dispatch(setModalPostAdd(false))}
              >Опубликовать
              </button>
            )
          }

        </div>

        <input
          type="text"
          className={`${style.inputTitle} ${errors.title?.type === 'required' ? style.error : ''}`}
          placeholder="Заголовок"
          name="title"
          ref={register({required: true})}
        />
        <input
          type="text"
          className={`${style.inputTitle} ${errors.imgLink?.type === 'required' ? style.error : ''}`}
          placeholder="Ссылка на картинку"
          name="imgLink"
          ref={register({required: true})}
        />
        <textarea
          className={`${style.inputText} ${errors.text?.type === 'required' ? style.error : ''}`}
          placeholder="Основной текст ....."
          name="text"
          ref={register({required: true})}
        />
      </form>
    </div>
  );
};

export default ModalAddPost;