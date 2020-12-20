import React from 'react';
import PropTypes from 'prop-types';

import "./PostItem.scss"
import {useSelector} from "react-redux";

const PostItem = ({dataPost}) => {
  const isEdit = useSelector(state => state.editReducer.editMode);

  return (
    <div className="post-item">
      <div className="post-item__header">
        {
          isEdit ? (
            <div className="post-item__btns">
              <div className="post-item__title">{dataPost.title}</div>
              <button className="post-item__delete">
                <img src={require('../../assets/trash-can.svg').default} alt=""/>
              </button>
              <button className="post-item__pencil">
                <img src={require('../../assets/pencil.svg').default} alt=""/>
              </button>
            </div>
          ) : (
            <div className="post-item__title">{dataPost.title}</div>
          )
        }
        <div className="post-item__title post-item__title--date">{dataPost.date}</div>
      </div>
      <div className="post-item__content">
        <img src={dataPost.image} alt={dataPost.title} className="post-item__img"/>
        <div className="post-item__text">{dataPost.text}</div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  dataPost: PropTypes.object.isRequired,
}

export default PostItem;