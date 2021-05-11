import { initialState } from './initialState';
import * as t from './actionTypes';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_ROLE_STATE:
      return {
        ...state,
        isAdmin: true
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
        stories: [...state.stories, action.payload],
      };
    case t.GET_STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    case t.GET_STORY:
      return {
        ...state,
        story: action.payload,
      };
    case t.LOGOUT:
      return { //no need for story state since we post that data to the backend anyway!!!
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
