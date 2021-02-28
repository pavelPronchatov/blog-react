import React from 'react';
import PostItem from "../PostItem/PostItem";

import style from "./PostList.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const PostList = () => {
  const postItems = useSelector((state: AppStateType) => state.editReducer.postsPerPage);
  return (
    <div className={style.posts}>
      {
        postItems && postItems.map(el => (
          <PostItem key={el.id} dataPost={el}/>
        ))
      }

    </div>
  );
};


export default PostList;