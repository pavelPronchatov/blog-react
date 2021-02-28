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
} from "../actions/types";
import {formatedDate} from "../../functions";
import {PostType} from "../../types/types";
import {
  AddPostType,
  ChangeCurrentPageType,
  ChangePostsPerPageType,
  DeletePostType, EditPostType,
  ExitEditModeType, SelectEditPostType, SetDetailPostType, SetEditModeType, SetIsEditPostType, SetModalPostAddType,
  SetPostACType
} from "../actions/actions";


const initialState = {
    editMode: false as boolean,
    posts: [] as Array<PostType>,
    date: new Date() as Date,
    editPost: {} as PostType,
    isModalAddPost: false as boolean,
    isEditPost: false as boolean,
    postDetailItem: {} as PostType,
    currentPage: 1 as number,
    postsPerPage: [] as Array<PostType>,
}


export type InitialStateType = typeof initialState;

export type ActionsTypes =
    SetPostACType
    | ChangePostsPerPageType
    | ExitEditModeType
    | DeletePostType
    | AddPostType
    | SetEditModeType
    | SelectEditPostType
    | SetModalPostAddType
    | SetIsEditPostType
    | EditPostType
    | SetDetailPostType
    | ChangeCurrentPageType;

export const editReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
            }

        case IS_EDIT:
            return {
                ...state,
                editMode: true,
            }

        case EXIT_EDIT:
            return {
                ...state,
                editMode: false,
            }

        case DELETE_ITEM:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.postId),
            }

        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        ...action.postItem,
                        id: Date.now(),
                        readable: false,
                        date: formatedDate(state.date),
                    }
                ]
            }

        case SELECT_EDIT_POST:
            return {
                ...state,
                editPost: state.posts.filter(el => {
                    if (el.id === action.postId) {
                        return el;
                    }
                })[0]
            }

        case EDIT_POST:
            return {
                ...state,
                posts: [...state.posts.map(el => {
                    if (el.id === action.postId) {
                        return {
                            ...el,
                            date: formatedDate(state.date),
                            ...action.postItem,
                        }
                    } else {
                        return el;
                    }
                })]
            }

        case IS_MODAL_POST_ADD:
            return {
                ...state,
                isModalAddPost: action.isOpen,
            }

        case IS_EDIT_POST:
            return {
                ...state,
                isEditPost: action.isEditPost,
            }

        case DETAIL_POST:
            return {
                ...state,
                postDetailItem: state.posts.filter(el => {
                    if (el.id === action.postId) {
                        return el;
                    }
                })[0]
            }

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }

        case SET_POSTS_PER_PAGE:
            return {
                ...state,
                postsPerPage: [...state.posts.slice(((state.currentPage * 5) - 5), state.currentPage * 5)]
            }

        default:
            return state
    }
}