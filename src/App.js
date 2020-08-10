import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import Camps from './components/Camps';
import Users from './components/Users';
import NewCamp from './components/NewCamp';
import Navbar from './components/Navbar';
import './App.css';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Camps} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/users/:userId' component={UserPage} />
        <Route exact path='/campgrounds/new' component={NewCamp} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
