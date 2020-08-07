import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import CampsList from './components/CampsList';
import Users from './components/Users';
import NewCamp from './components/NewCamp';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={CampsList} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/camps/new' component={NewCamp} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
