import React from 'react';
import PropTypes from 'prop-types';

import style from "./PostItem.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../../redux/actions/actions";

const PostItem = ({dataPost}) => {
  const isEdit = useSelector(state => state.editReducer.editMode);

  const dispatch = useDispatch();

  return (
    <div className={style.postItem}>
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
              <button className={style.postItemPencil}>
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
        <img src={dataPost.image} alt={dataPost.title} className={style.postItemImg}/>
        <div className={style.postItemText}>{dataPost.text}</div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  dataPost: PropTypes.object.isRequired,
}

export default PostItem;