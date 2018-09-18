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
    const jwScript = document.createElement("script");
    jwScript.src = "https://content.jwplatform.com/libraries/BjcwyK37.js";
    jwScript.async = true;
    jwScript.onload = this.setupJWPlayer;
    this.setState({
      jwScript: jwScript,
    });
    document.head.appendChild(jwScript);
  }

  componentWillUnmount() {
    this.state.jwScript.parentElement.removeChild(this.state.jwScript);
    window.jwplayer = null;
  }

  setupJWPlayer() {
      const { setupBlock } = this.props;
      const playerInstance = window.jwplayer("player");
      // Now have access to the playerInstance in other methods within component.
      // via this.state.playerInstnace
      this.setState({ 
          playerInstance: playerInstance,
      });
      playerInstance.setup(setupBlock);
  }

  render() {
    return (
      <div id="jwplayer-container">
        <div id="player" />
      </div>
    );
  }
}

export default JWWrapper;
