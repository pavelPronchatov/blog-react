import {ADD_POST, DELETE_ITEM, EDIT_POST, EXIT_EDIT, IS_EDIT, SET_POST} from "../actions/types";
import {formatedDate} from "../../functions";


const initialState = {
  editMode: false,
  posts: [],
  date: new Date(),
  editPost: {},
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

    case EDIT_POST:
      return {
        ...state,
        editPost: state.posts.filter(el => {
          if (el.id === action.postId) {
            return el;
          }
        })[0]
      }


    default:
      return state
  }
}