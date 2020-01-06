import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/babel";
    script.src = "./js/nav-toggle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="page-content">
        <div className="content-container">
          <Main></Main>
        </div >
        <div className="nav-menu">
          <div className="nav-card">
            <a href="/">ZION HUNG</a>
          </div>
          <div className="nav-card">
            <a href="/resume">Resume</a>
          </div>
          <div className="nav-card">
            <a href="/about">About Me</a>
          </div>
          <div className="nav-card">
            <a href="/projects">Projects</a>
          </div>
          <div className="nav-card">
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="nav-icon" id="nav-icon">
          <div className="nav-line" />
          <div className="nav-line" />
          <div className="nav-line" />
        </div>
      </div>
    )
  }
}

export default App;
