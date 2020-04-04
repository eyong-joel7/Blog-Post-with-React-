import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import FourzeroFour from './components/FourzeroFour';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/contact-us" component={ContactUs}/> 
        <Route path = "/post/:slug" component ={Post} />
        <Route component = {FourzeroFour}/>
      </Switch>
     
 
    </div>
    </Router>
  );
}

export default App;
