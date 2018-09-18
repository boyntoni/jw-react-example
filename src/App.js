import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JWWrapper from "./JWWrapper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      setupBlock: {
        "file": "http://content.bitsontherun.com/videos/bkaovAYt-52qL9xLP.mp4",
        "image": "http://d3el35u4qe4frz.cloudfront.net/bkaovAYt-480.jpg",
      },
    };
  }
  
  render() {
    const { setupBlock } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { setupBlock && <JWWrapper setupBlock={setupBlock} /> }
      </div>
    );
  }
}

export default App;
