import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    // const script = document.createElement("script");
    // script.type = "text/babel";
    // script.src = "./js/nav-toggle.js";
    // script.async = true;
    // document.body.appendChild(script);
  }

  navClickHandler = () => {
    var nav_line_1 = document.getElementById('nav-line-1');
    var nav_line_2 = document.getElementById('nav-line-2');
    var nav_line_3 = document.getElementById('nav-line-3');
    nav_line_1.classList.toggle("nav-line-actived-1");
    nav_line_2.classList.toggle("nav-line-actived-2");
    nav_line_3.classList.toggle("nav-line-actived-3");

    var card_1 = document.getElementById('nav-card-1');
    var card_2 = document.getElementById('nav-card-2');
    var card_3 = document.getElementById('nav-card-3');
    var card_4 = document.getElementById('nav-card-4');
    var card_5 = document.getElementById('nav-card-5');
    var card_6 = document.getElementById('nav-card-6');
    card_1.classList.toggle("card-child-1");
    card_1.classList.toggle("nav-card-1");
    card_2.classList.toggle("card-child-2");
    card_2.classList.toggle("nav-card-2");
    card_3.classList.toggle("card-child-3");
    card_3.classList.toggle("nav-card-3");
    card_4.classList.toggle("card-child-4");
    card_4.classList.toggle("nav-card-4");
    card_5.classList.toggle("card-child-5");
    card_5.classList.toggle("nav-card-5");
    card_6.classList.toggle("card-child-6");
    card_6.classList.toggle("nav-card-6");
    var nav_menu = document.getElementById('nav-menu');
    nav_menu.classList.toggle("nav-menu-open");

    var card_a_1 = document.getElementById("card-a-1");
    var card_a_2 = document.getElementById("card-a-2");
    var card_a_3 = document.getElementById("card-a-3");
    var card_a_4 = document.getElementById("card-a-4");
    var card_a_5 = document.getElementById("card-a-5");
    var card_a_6 = document.getElementById("card-a-6");
    card_a_1.classList.toggle("card-a");
    card_a_1.classList.toggle("card-a-active");
    card_a_2.classList.toggle("card-a");
    card_a_3.classList.toggle("card-a");
    card_a_4.classList.toggle("card-a");
    card_a_5.classList.toggle("card-a");
    card_a_6.classList.toggle("card-a");
  }

  cardClickHandler_1 = () => {
    var card_1 = document.getElementById('nav-card-1');
    card_1.classList.toggle("card-child-active");
  }
  cardClickHandler_2 = () => {
    var card_2 = document.getElementById('nav-card-2');
    card_2.classList.toggle("card-child-active");
  }
  cardClickHandler_3 = () => {
    var card_3 = document.getElementById('nav-card-3');
    card_3.classList.toggle("card-child-active");
  }
  cardClickHandler_4 = () => {
    var card_4 = document.getElementById('nav-card-4');
    card_4.classList.toggle("card-child-active");
  }
  cardClickHandler_5 = () => {
    var card_5 = document.getElementById('nav-card-5');
    card_5.classList.toggle("card-child-active");
  }
  cardClickHandler_6 = () => {
    var card_6 = document.getElementById('nav-card-6');
    card_6.classList.toggle("card-child-active");
  }

  render() {
    return (
      <div className="page-content">
        <div className="content-container">
          <Main></Main>
        </div >
        <div className="nav-menu" id="nav-menu">
          <div className="nav-card nav-card-1" id="nav-card-1" onClick={this.cardClickHandler_1}>
            <a href="/" id="card-a-1">ZION HUNG©</a>
          </div>
          <div className="nav-card nav-card-2" id="nav-card-2" onClick={this.cardClickHandler_2}>
            <a href="/resume" id="card-a-2" onClick={this.cardClickHandler}>Resume</a>
          </div>
          <div className="nav-card nav-card-3" id="nav-card-3" onClick={this.cardClickHandler_3}>
            <a href="/about" id="card-a-3">About Me</a>
          </div>
          <div className="nav-card nav-card-4" id="nav-card-4" onClick={this.cardClickHandler_4}>
            <a href="/projects" id="card-a-4">Projects</a>
          </div>
          <div className="nav-card nav-card-5" id="nav-card-5" onClick={this.cardClickHandler_5}>
            <a href="/Design" id="card-a-5">Design</a>
          </div>
          <div className="nav-card nav-card-6" id="nav-card-6" onClick={this.cardClickHandler_6}>
            <a href="/contact" id="card-a-6">Contact</a>
          </div>
        </div>
        <div className="nav-icon" id="nav-icon" onClick={this.navClickHandler}>
          <div className="nav-line" id="nav-line-1" />
          <div className="nav-line" id="nav-line-2" />
          <div className="nav-line" id="nav-line-3" />
        </div>
      </div>
    )
  }
}

export default App;
