import './App.scss';
import Login from './components/Login';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import CreateStory from './components/CreateStory';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/user" component={Login} />
          <Route path="/" component={CreateStory}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
