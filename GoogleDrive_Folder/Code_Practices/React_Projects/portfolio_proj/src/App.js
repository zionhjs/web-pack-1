import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="content-container">
          <Main></Main>
        </div >
        <div className="nav-icon">
          <div className="nav-line" />
          <div className="nav-line" />
          <div className="nav-line" />
        </div>
        <div className="nav-menu">
          <div className="nav-card">
            ZH
            </div>
          <div className="nav-card">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="nav-card">
            <Link to="/about">About Me</Link>
          </div>
          <div className="nav-card">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav-card">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
