import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home';
import {About} from './components/About';
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Service} from './components/Service';
import {Contact} from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
      <Home/>
    <Route path="/" exact component={About}/>
    <Route path="/Home" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Service" component={Service}/>
    <Route path="/Contact" component={Contact} />
    </Router>
    );
  }
}

export default withAuthenticator(App, true);
