import {ADD_POST, DELETE_ITEM, EDIT_POST, EXIT_EDIT, IS_EDIT, SET_POST} from "./types";
import {mainApi} from "../../api/api";

export const setPostAC = (posts) => ({type: SET_POST, posts});
export const setEditMode = () => ({type: IS_EDIT});
export const exitEditMode = () => ({type: EXIT_EDIT});
export const deletePost = (postId) => ({type: DELETE_ITEM, postId});
export const addPost = (postItem) => ({type: ADD_POST, postItem});
export const editPost = (postId) => ({type: EDIT_POST, postId});


export const setPosts = () => dispatch => {
  mainApi.getPostApi()
    .then(data => dispatch(setPostAC(data.posts)));
}