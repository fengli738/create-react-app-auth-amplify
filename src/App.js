import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Router>
      <Home/>
    <Route path="/" exact component={About}/>
    <Route path="/Home" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Support" component={Support}/>
    <Route path="/Service" component={Service}/>
    <Route path="/Contact" component={Contact} />
    </Router>
    );
  }
}

export default withAuthenticator(App, true);
