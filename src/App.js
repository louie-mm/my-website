import './App.css';
import React from "react";
import Background from './background/Background.js'
import Title from './title/Title.js';
import Intro from './intro/Intro.js';
import Photo from './photo/Photo.js';
import Links from './links/Links.js';
import Nav from "./nav/Nav.js";

function App() {
    return (
    <div className="App">
      <header>
      </header>
      <Background/>
      <Title/>
      <Intro/>
      <Photo/>
      <Links/>
      <Nav/>
    </div>
  );
}

export default App;
