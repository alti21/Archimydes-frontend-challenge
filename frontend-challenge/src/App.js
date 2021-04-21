import './App.scss';
import Login from './components/Login';
import { Router, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import CreateStory from './components/CreateStory';
import history from './utils/history';

function App() {


  return (
    <div className="App">

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/user" component={CreateStory}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
