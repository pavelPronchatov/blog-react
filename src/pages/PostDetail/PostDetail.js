import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setDetailPost} from "../../redux/actions/actions";
import style from "./PostDetail.module.scss";
import {Link} from "react-router-dom";
import {replaceEmptyImg} from "../../functions";

const PostDetail = ({match}) => {
  const dispatch = useDispatch();
  const dataPostItem = useSelector(state => state.editReducer.postDetailItem);
  const posts = useSelector(state => state.editReducer.posts);
  const imgRef = useRef(null);

  useEffect(() => {
    if (posts.length) {
      dispatch(setDetailPost(+match.params.postId));
    }
  }, [posts]);

  return (
    <div className={style.post}>
      <Link to={'/'} className={style.back}/>
      <h3 className={style.title}>{dataPostItem.title}</h3>
      <div className={style.date}>{dataPostItem.date}</div>
      <img
        ref={imgRef}
        src={dataPostItem.imgLink}
        alt=""
        className={style.image}
        onError={() => replaceEmptyImg(imgRef.current)}
      />
      <p className={style.text}>{dataPostItem.text}</p>
    </div>
  );
};

export default PostDetail;