import React, {useEffect} from 'react';


import style from "./ModalAddPost.module.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/actions/actions";

const ModalAddPost = ({isOpenModal, setIsOpenModal}) => {
  const dispatch = useDispatch();


  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpenModal])

  const {register, handleSubmit, reset, errors} = useForm({
    defaultValues: {
      title: '',
      imgLink: '',
      text: '',
    }
  });

  const onSubmit = data => {
    dispatch(addPost(data));
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
            onClick={() => setIsOpenModal(false)}
          />
          <button
            type="submit"
            className={style.btn}
            onClick={() => setIsOpenModal(false)}
          >Опубликовать
          </button>
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