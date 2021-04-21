import './App.scss';
import Login from './components/Login';
import { Router, Switch, Route, NavLink, HashRouter } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import CreateStory from './components/CreateStory';
import history from './utils/history';
import StoryList from './components/StoryList';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from './redux/actions' //OUR ACTIONS
import Story from './components/Story'
import { removeUserSession } from './utils/Common'

function App() {

  const usedispatch = useDispatch();
  const userLogout = () => usedispatch(logout());
  const handleLogout = () => {
    userLogout()
    removeUserSession()
  }

  return (
    <div className="App">

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/user" component={CreateStory}/>
          <PrivateRoute path="/userStories" component={StoryList}/>
          <PrivateRoute path="/userStory" component={Story}/>
        </Switch>
        <Link to="/" onClick={handleLogout}>Logout</Link>
      </Router>
    </div>
  );
}

export default App;
