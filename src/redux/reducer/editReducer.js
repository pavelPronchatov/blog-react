import {IS_EDIT, SET_POST} from "../actions/types";


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

    default:
      return state
  }
}