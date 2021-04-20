import logo from './logo.svg';
import './App.scss';
import Login from './components/Login';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
