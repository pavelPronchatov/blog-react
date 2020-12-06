import React from 'react';
import PostItem from "../PostItem/PostItem";

import "./PostList.scss";
import {useSelector} from "react-redux";

const PostList = () => {
  const postItems = useSelector(state => state.editReducer.posts);

  console.log('post', postItems);
  return (
    <div className="posts">
      {
        postItems && (
          postItems.map(el => (
            <PostItem/>
          ))
        )

      }

    </div>
  );
};

export default PostList;