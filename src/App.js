import './App.css';
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login';
import Register1 from './components/Registation/Register1/Register1';
import Register2 from './components/Registation/Register2/Register2';
import {Route,Switch,Redirect} from 'react-router-dom';
import MainPage from './components/MainUserPage/MainPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><HomePage/></Route>
        <Route path="/login" ><Login/></Route>
        <Route path="/register1"><Register1/></Route>
        <Route path="/register2"><Register2/></Route>
        <Route path="/mainpage"><MainPage/></Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
