import React from 'react';

import "./PostItem.scss"

const PostItem = () => {
  return (
    <div className="post-item">
      <div className="post-item__header">
        <div className="post-item__title">Заголовок</div>
        <div className="post-item__title post-item__title--date">12.09.2020</div>
      </div>
      <div className="post-item__content">
        <img src="" alt="" className="post-item__img"/>
        <div className="post-item__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut cumque
          doloribus eius error fugit minus necessitatibus nemo temporibus ut.
        </div>
      </div>
    </div>
  );
};

export default PostItem;