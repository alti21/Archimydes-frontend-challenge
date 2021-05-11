import * as t from './actionTypes';
import { setUserSession } from '../utils/Common';
import { getToken } from '../utils/Common'


const token = getToken();

// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData, //{ ...json, userId: email }
  };
};

const setStoryState = (storyData) => {
    return {
      type: t.CREATE_STORY,
      payload: storyData, //storyData is the object with summary, description, type, etc.
    };
};

const getStoryState = (storyData) => {
  return {
    type: t.GET_STORIES,
    payload: storyData, //storyData is the object with summary, description, type, etc.
  };
};

const getSingleStoryState = (storyData) => {
  return {
    type: t.GET_STORY,
    payload: storyData, //storyData is the object with summary, description, type, etc.
  };
};

export const login = (loginInput) => { //our login action
    const { email, password, isAdmin } = loginInput;
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch('http://localhost:3000/api/v1/signin', {
        method: 'POST',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {
            dispatch(setLoginState({ ...json, userId: email, isAdmin: isAdmin })); // our action is called here with object as parameter, this is our payload
            setUserSession(json.token, json.lastName)
        })
        .catch((err) => {
          alert('Login Failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
};

export const getStories = () => {
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch('http://localhost:3000/api/v1/stories', {
        method: 'GET',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {
            console.log(json)
            dispatch(getStoryState( [...json ])); // our action is called here with object as parameter, this is our payload
        })
        .catch((err) => {
          alert('Get stories failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
}

export const viewStory = id => {
  return (dispatch) => {  // don't forget to use dispatch here!
      return fetch(`http://localhost:3000/api/v1/stories/${id}`, {
        method: 'GET',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {
            console.log(json)
            //history push here
            dispatch(getSingleStoryState( {...json } )); // our action is called here with object as parameter, this is our payload
        })
        .catch((err) => {
          alert('View stories failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
}

export const roleChange = () => {
    return {
        type: t.SET_ROLE_STATE,
      };
}

export const logout = () => {
  return {
    type: t.LOGOUT,
  };
}



export const createStory = storyInput => {
  console.log(token)
    const { summary, description, type, complexity, time, cost } = storyInput;
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch('http://localhost:3000/api/v1/stories', {
        method: 'POST',
        headers: {  
          credentials: 'include',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(storyInput),
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {
   
            console.log(json)
 
            dispatch(setStoryState({  // our action is called here with object as parameter, this is our payload
                summary: summary,
                description: description,
                type: type,
                complexity: complexity,
                time: time,
                cost: cost
            })); // our action is called here
  
        })
        .catch((err) => {
          alert('Create story failed, please retry');
          console.log(err);
        });
    };
}

export const addStory = story => {
    return {
        type: t.ADD_STORY,
        payload: story,
    }
}

export const setStatus = (id, status) => {
  return (dispatch) => {  // don't forget to use dispatch here!
      return fetch(`http://localhost:3000/api/v1/stories/${id}/${status}`, {
        method: 'PUT',
        headers: {  
          credentials: 'include',
          Accept: 'application/json',
          'Content-Type': 'text/html',
          'Authorization': `Bearer ${token}`
        },
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {

            console.log(json)
       
        })
        .catch((err) => {
          alert('Login Failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
}
