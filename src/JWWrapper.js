import React, { Component } from 'react';
import './App.css';

class JWWrapper extends Component {
  constructor(props) {
      super(props);
      this.state = {
          playerInstance: null,
      };

      this.setupJWPlayer = this.setupJWPlayer.bind(this);
  }
  
  componentDidMount() {
    this.setupJWPlayer();
  }

  setupJWPlayer() {
    const { setupBlock } = this.props;
    const playerInstance = window.jwplayer("jwplayer");
    // Now have access to the playerInstance in other methods within component.
    this.setState({ 
        playerInstance: playerInstance,
    });
    playerInstance.setup(setupBlock);
  }

  render() {
    return (
      <div id="jwplayer-container">
        <div id="jwplayer" />
      </div>
    );
  }
}

export default JWWrapper;
