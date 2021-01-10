import React from 'react';
import PostItem from "../PostItem/PostItem";

import style from "./PostList.module.scss";
import {useSelector} from "react-redux";

const PostList = () => {
  const postItems = useSelector(state => state.editReducer.postsPerPage);
  console.log('post', postItems);
  return (
    <div className={style.posts}>
      {
        postItems && (
          postItems.map(el => (
            <PostItem key={el.id} dataPost={el}/>
          ))
        )

      }

    </div>
  );
};


export default PostList;