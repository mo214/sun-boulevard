import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    
    <>
    <Router>
      <Navbar/>
      <Switch> 
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
      
    </>
    
  );
}

export default App;

