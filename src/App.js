// import Alert from './Alert';

import React from 'react'
import Profile from './components/Profile';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const url = process.env.REACT_APP_API_URL;

  return (
    <div className='App'>

      <Router>


        <Navbar />
        <Switch>

          <Route exact path="/profile-card">
            <Profile url={url} />
          </Route>

          <Route exact path="/card">
            <Card />
          </Route>
        </Switch>

      </Router>



    </div>
  );
};

export default App;