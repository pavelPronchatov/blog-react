import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import PostItem from '../PostItem/PostItem';
import st from "./PostList.module.scss";


const PostList = () => {
  const postItems = useSelector((state: AppStateType) => state.editReducer.postsPerPage);

  return (
    <div className={st.posts}>
      {
        postItems && postItems.map(el => (
          <PostItem key={el.id} dataPost={el}/>
        ))
      }

    </div>
  );
};

export default PostList;