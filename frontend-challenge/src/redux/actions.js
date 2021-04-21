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
      payload: storyData,
    };
  };

export const login = (loginInput) => { //our login action
    const { email, password } = loginInput;
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
        // if (json.msg === 'success') { // response success checking logic could differ
           // console.log(json)
            dispatch(setLoginState({ ...json, userId: email })); // our action is called here with object as parameter, this is our payload
            //we appended json object to our state
            //   } else {
        //     alert('Login Failed', 'Email or Password is incorrect');
        //  }
            setUserSession(json.token, json.lastName)
        })
        .catch((err) => {
          alert('Login Failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
};

export const roleChange = role => {
    return {
        type: t.SET_ROLE_STATE,
        payload: role
      };
}

/**
 * story input:
{
  "summary": "string",
  "description": "string",
  "type": "string",
  "complexity": "string"
}
 */
console.log(token)

export const createStory = storyInput => {
    const { summary, description, type, complexity, time, cost } = storyInput;
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch('http://localhost:3000/api/v1/stories', {
        method: 'POST',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(storyInput),
      })
        .then((response) => response.json()) //json will be the response body
        .then((json) => {
        // if (json.msg === 'success') { // response success checking logic could differ
            console.log(json)
            dispatch(setStoryState({  // our action is called here with object as parameter, this is our payload
                summary: summary,
                description: description,
                type: type,
                complexity: complexity,
                time: time,
                cost: cost
            })); // our action is called here
        //   } else {
        //     alert('Login Failed', 'Email or Password is incorrect');
        //  }
        })
        .catch((err) => {
          alert('Some error occured, please retry');
          console.log(err);
        });
    };
}

  /**
   JSON reponse body:
   {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiSGlsZGEiLCJsYXN0TmFtZSI6IkRheSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYxODk0NzE3MH0.llwr_9ku7ilzlfXdQeKAJ3ZXu5zB1xSX8r954z9VrnM",
  "id": 2,
  "firstName": "Hilda",
  "lastName": "Day",
  "role": "Admin"
}
   */

// export const roleChangeToUser = () => {
//     return {
//         type: t.SET_ROLE_USER,
//       };
// }

// export const roleChangeToAdmin = () => {
//     return {
//         type: t.SET_ROLE_ADMIN,
//       };
// }

