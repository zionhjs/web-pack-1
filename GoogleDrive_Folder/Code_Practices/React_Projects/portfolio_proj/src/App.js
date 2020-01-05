import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "/portfolio_proj/src/js/nav-toggle.js"
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return (
      <div className="page-content">
        <div className="content-container">
          <Main></Main>
        </div >
        <div className="nav-icon" id="nav-line">
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
