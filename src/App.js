import React, {useState, createContext}from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
export const UserContext = createContext()
function App() {
 const [loggedInUser, setLoggedInUser]= useState({});
 const [vehicleType, setVehicleType] = useState('');
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser,vehicleType , setVehicleType]}>

      <Router>
       <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
              </Route>
              <Route path="/login">
                <Login/>
                </Route>
                <Route path="/blog">
                  <Blog/>
                </Route>
                <PrivateRoute path="/destination">
              <Destination/>
                </PrivateRoute>

              <Route path="/">
            <Home/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
