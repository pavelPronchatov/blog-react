import {SET_POST} from "../actions/types";


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

    default:
      return state
  }
}