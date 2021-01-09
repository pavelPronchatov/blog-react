import {
  ADD_POST,
  DELETE_ITEM,
  DETAIL_POST,
  EDIT_POST,
  EXIT_EDIT,
  IS_EDIT,
  IS_EDIT_POST,
  IS_MODAL_POST_ADD,
  SELECT_EDIT_POST,
  SET_POST
} from "./types";
import {mainApi} from "../../api/api";

export const setPostAC = (posts) => ({type: SET_POST, posts});
export const setEditMode = () => ({type: IS_EDIT});
export const exitEditMode = () => ({type: EXIT_EDIT});
export const deletePost = (postId) => ({type: DELETE_ITEM, postId});
export const addPost = (postItem) => ({type: ADD_POST, postItem});
export const selectEditPost = (postId) => ({type: SELECT_EDIT_POST, postId});
export const setModalPostAdd = (isOpen) => ({type: IS_MODAL_POST_ADD, isOpen});
export const setIsEditPost = (isEditPost) => ({type: IS_EDIT_POST, isEditPost});
export const editPost = (postId, postItem) => ({type: EDIT_POST, postId, postItem});
export const setDetailPost = (postId) => ({type: DETAIL_POST, postId});


export const setPosts = () => dispatch => {
  mainApi.getPostApi()
    .then(data => dispatch(setPostAC(data.posts)));
}