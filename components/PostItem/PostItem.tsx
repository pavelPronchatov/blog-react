import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deletePost, selectEditPost, setIsEditPost, setModalPostAdd} from '../../redux/actions/actions';
import {AppStateType} from '../../redux/store';
import {PostType} from '../../types/postType';
import st from "./PostItem.module.scss";
import {replaceEmptyImg} from "../../functions";
import Link from 'next/link';
import Image from "next/image";


type PropsType = {
  dataPost: PostType
}


const PostItem: React.FC<PropsType> = ({dataPost}) => {
  const isEdit = useSelector((state: AppStateType) => state.editReducer.editMode);

  const dispatch = useDispatch();

  const imgRef = useRef(null);

  return (
    <div className={st.postItem}>
      <div className={st.postItemHeader}>
        {
          isEdit ? (
            <div className={st.postItemBtns}>
              <div className={st.postItemTitle}>{dataPost.title}</div>
              <button
                className={st.postItemDelete}
                onClick={() => dispatch(deletePost(dataPost.id))}
              >
                <Image src={'../../assets/trash-can.svg'} width={"auto"} height={"auto"}/>
              </button>
              <button
                className={st.postItemPencil}
                onClick={() => {
                  dispatch(selectEditPost(dataPost.id));
                  dispatch(setModalPostAdd(true));
                  dispatch(setIsEditPost(true));
                }}
              >
                <Image src={'../../assets/pencil.svg'} width={"auto"} height={"auto"}/>
              </button>
            </div>
          ) : (
            <div className={st.postItemTitle}>{dataPost.title}</div>
          )
        }
        <div className={st.postItemTitle}>{dataPost.date}</div>
      </div>
      <div className={st.postItemContent}>
        <Link href={`/post-item/${dataPost.id}`}>
          <a>
            <img
              ref={imgRef}
              src={dataPost.imgLink}
              alt={dataPost.title}
              className={st.postItemImg}
              onError={() => replaceEmptyImg(imgRef.current)}/>
          </a>
        </Link>

        <div className={st.postItemText}>{dataPost.text}</div>
      </div>
    </div>
  );
};
export default PostItem;