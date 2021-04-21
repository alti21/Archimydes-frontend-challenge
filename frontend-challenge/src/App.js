import './App.scss';
import Login from './components/Login';
import { Router, Switch, Route, NavLink } from 'react-router-dom';
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
          <Route exact path="/Archimydes-frontend-challenge" component={Login} />
          <PrivateRoute path="/Archimydes-frontend-challenge/user" component={CreateStory}/>
          <PrivateRoute path="/Archimydes-frontend-challenge/userStories" component={StoryList}/>
          <PrivateRoute path="/Archimydes-frontend-challenge/userStory" component={Story}/>
        </Switch>
        <Link to="/Archimydes-frontend-challenge/" onClick={handleLogout}>Logout</Link>
      </Router>
    </div>
  );
}

export default App;
