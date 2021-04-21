import * as t from './actionTypes';
import { setUserSession } from '../utils/Common';

// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
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
            dispatch(setLoginState({ ...json, userId: email })); // our action is called here
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

export const roleChange = role => {
    return {
        type: t.SET_ROLE_STATE,
        payload: role
      };
}