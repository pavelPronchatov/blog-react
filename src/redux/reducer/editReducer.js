import {DELETE_ITEM, EXIT_EDIT, IS_EDIT, SET_POST} from "../actions/types";


const initialState = {
  editMode: false,
  posts: [],
}



export const editReducer = (state = initialState, action) => {
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

    default:
      return state
  }
}