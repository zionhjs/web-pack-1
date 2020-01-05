import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="nav-menu">
          <Link to="/resume">Resume</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="content-container">
          <Main></Main>
        </div >
      </div>
    )
  }
}

export default App;
