import {
    ADD_POST, CHANGE_CURRENT_PAGE,
    DELETE_ITEM,
    DETAIL_POST,
    EDIT_POST,
    EXIT_EDIT,
    IS_EDIT,
    IS_EDIT_POST,
    IS_MODAL_POST_ADD,
    SELECT_EDIT_POST,
    SET_POST, SET_POSTS_PER_PAGE
} from "./types";
import {mainApi} from "../../api/api";
import {PostType} from "../../types/types";
import {AppStateType} from "../store";
import {ActionsTypes} from "../reducer/editReducer";
import {ThunkAction} from "redux-thunk";


export type SetPostACType = {
    type: typeof SET_POST
    posts: Array<PostType>
}

export type SetEditModeType = {
    type: typeof IS_EDIT
}

export type ChangePostsPerPageType = {
    type: typeof SET_POSTS_PER_PAGE
}

export type ExitEditModeType = {
    type: typeof EXIT_EDIT
}

export type DeletePostType = {
    type: typeof DELETE_ITEM
    postId: number
}

export type AddPostType = {
    type: typeof ADD_POST
    postItem: PostType
}

export type SelectEditPostType = {
    type: typeof SELECT_EDIT_POST,
    postId: number,
}

export type SetModalPostAddType = {
    type: typeof IS_MODAL_POST_ADD
    isOpen: boolean
}

export type SetIsEditPostType = {
    type: typeof IS_EDIT_POST
    isEditPost: boolean
}

export type EditPostType = {
    type: typeof EDIT_POST
    postId: number
    postItem: object
}

export type SetDetailPostType = {
    type: typeof DETAIL_POST
    postId: number
}

export type ChangeCurrentPageType = {
    type: typeof CHANGE_CURRENT_PAGE
    page: number
}

export const setPostAC = (posts: Array<PostType>): SetPostACType => ({type: SET_POST, posts});
export const setEditMode = (): SetEditModeType => ({type: IS_EDIT});
export const exitEditMode = (): ExitEditModeType => ({type: EXIT_EDIT});
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_ITEM, postId});
export const addPost = (postItem: PostType): AddPostType => ({type: ADD_POST, postItem});
export const selectEditPost = (postId: number): SelectEditPostType => ({type: SELECT_EDIT_POST, postId});
export const setModalPostAdd = (isOpen: boolean): SetModalPostAddType => ({type: IS_MODAL_POST_ADD, isOpen});
export const setIsEditPost = (isEditPost: boolean): SetIsEditPostType => ({type: IS_EDIT_POST, isEditPost});
export const editPost = (postId: number, postItem: object): EditPostType => ({type: EDIT_POST, postId, postItem});
export const setDetailPost = (postId: number): SetDetailPostType => ({type: DETAIL_POST, postId});
export const changeCurrentPage = (page: number): ChangeCurrentPageType => ({type: CHANGE_CURRENT_PAGE, page});
export const changePostsPerPage = (): ChangePostsPerPageType => ({type: SET_POSTS_PER_PAGE});


export const setPosts = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch, getState) => {
    mainApi.getPostApi()
        .then(data => dispatch(setPostAC(data.posts)));
}