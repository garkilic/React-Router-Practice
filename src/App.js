import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About';
import Profile from './Components/Profile';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path="/about">
            <About /> 
          </Route>


          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
