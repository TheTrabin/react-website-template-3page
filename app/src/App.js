import React from 'react';
import  NavigationBar  from './components/navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
     <Router>
     <NavigationBar/>
     <Route exact path='/'><Home/></Route>
     <Route exact path='/About'><About/></Route>
     <Route exact path='/Menu'><Menu/></Route> 
     </Router>
    </div>
  );
}

export default App;
