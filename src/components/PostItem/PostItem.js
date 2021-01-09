import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import style from "./PostItem.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {deletePost, selectEditPost, setIsEditPost, setModalPostAdd} from "../../redux/actions/actions";
import {replaceEmptyImg} from "../../functions";
import {Link} from "react-router-dom";

const PostItem = ({dataPost}) => {
  const isEdit = useSelector(state => state.editReducer.editMode);

  const dispatch = useDispatch();

  const imgRef = useRef(null);

  return (
    <Link to={`/post-item/${dataPost.id}`} className={style.postItem}>
      <div className={style.postItemHeader}>
        {
          isEdit ? (
            <div className={style.postItemBtns}>
              <div className={style.postItemTitle}>{dataPost.title}</div>
              <button
                className={style.postItemDelete}
                onClick={() => dispatch(deletePost(dataPost.id))}
              >
                <img src={require('../../assets/trash-can.svg').default} alt=""/>
              </button>
              <button
                className={style.postItemPencil}
                onClick={() => {
                  dispatch(selectEditPost(dataPost.id));
                  dispatch(setModalPostAdd(true));
                  dispatch(setIsEditPost(true));
                }}
              >
                <img src={require('../../assets/pencil.svg').default} alt=""/>
              </button>
            </div>
          ) : (
            <div className={style.postItemTitle}>{dataPost.title}</div>
          )
        }
        <div className={style.postItemTitle}>{dataPost.date}</div>
      </div>
      <div className={style.postItemContent}>
        <img
          ref={imgRef}
          src={dataPost.imgLink}
          alt={dataPost.title}
          className={style.postItemImg}
          onError={() => replaceEmptyImg(imgRef.current)}/>
        <div className={style.postItemText}>{dataPost.text}</div>
      </div>
    </Link>
  );
};

PostItem.propTypes = {
  dataPost: PropTypes.object.isRequired,
}

export default PostItem;