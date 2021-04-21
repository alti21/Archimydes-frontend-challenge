import { initialState } from './initialState';
import * as t from './actionTypes';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_ROLE_STATE:
      return {
        initialState
      };
    case t.SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    case t.LOGOUT: 
      return {
        initialState
      };
    default:
      return state;
  } 
};

export const storyReducer = (state = [], action) => {
  switch (action.type) {
    case t.CREATE_STORY:
      return {
        ...state,
        stories: action.payload,
      };
    // case t.ADD_STORY:
    //   return {
    //     ...state,
    //     stories: [...state.stories, action.payload], //stories is an object
    //   };
    case t.LOGOUT:
      return {
        stories: [{complexity: "",
        cost: 0,
        description: "",
        summary: "",
        time: "",
        type: ""}]
      };
    default:
      return state;
  } 
}

// export const roleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case t.SET_ROLE_STATE:
//       return {
//         ...state,
//         role: action.payload,
//       };
//     default:
//       return state;
//   } 
// }