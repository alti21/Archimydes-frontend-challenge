import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import { useSelector } from 'react-redux'
 
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {

  const getToken = useSelector((state)=> state.loginReducer.token)
  console.log(getToken)
  return (
    <Route
      {...rest}
      render={(props) => getToken ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;

//gettoken is not true on first attempt of login, it is true on second attempt