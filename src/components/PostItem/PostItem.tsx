import React, {useRef} from 'react';
import style from "./PostItem.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {deletePost, selectEditPost, setIsEditPost, setModalPostAdd} from "../../redux/actions/actions";
import {replaceEmptyImg} from "../../functions";
import {Link} from "react-router-dom";
import {PostType} from "../../types/types";
import {AppStateType} from "../../redux/store";


type PropsType = {
    dataPost: PostType
}


const PostItem: React.FC<PropsType> = ({dataPost}) => {
  const isEdit = useSelector((state: AppStateType) => state.editReducer.editMode);

  const dispatch = useDispatch();

  const imgRef = useRef(null);

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
          <Link to={`/post-item/${dataPost.id}`}>
          <img
              ref={imgRef}
              src={dataPost.imgLink}
              alt={dataPost.title}
              className={style.postItemImg}
              onError={() => replaceEmptyImg(imgRef.current)}/>
          </Link>

        <div className={style.postItemText}>{dataPost.text}</div>
      </div>
    </div>
  );
};

export default PostItem