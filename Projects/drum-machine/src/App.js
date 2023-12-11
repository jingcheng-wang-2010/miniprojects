import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // event handler for when drum pad button is clicked
  handleClick (e) {
    this.setState(() => ({
      // update display text
      display: e.target.value
    }))
    //play audio linked to the drum pad button
    const audio = new Audio(e.target.firstChild.src);
    audio.play();
  }
  render () {
    return (
      <div className='App'>
        <div id='drum-machine'>
          <div id='display-container'>
            <p id='display'>
              {this.state.display}
            </p>
            </div>
          <div className='pad-container'>
            <div className='drum-pad'>
              <button id="Heater-1" value='Heater-1' onClick={this.handleClick}>
                <audio
                  className='clip' 
                  id="Q" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                ></audio>
                Q
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Heater-2" value='Heater-2' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="W" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                ></audio>
                W
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Heater-3" value='Heater-3' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="E" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                ></audio>
                E
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Heater-4" value='Heater-4' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="A" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                ></audio>
                A
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Clap" value='Clap' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="S" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                ></audio>
                S
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Open-HH" value='Open-HH' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="D" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                ></audio>
                D
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Kick-n'-Hat" value="Kick-n'-Hat" onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="Z" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                ></audio>
                Z
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Kick" value='Kick' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="X" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                ></audio>
                X
              </button>
            </div>
            <div className='drum-pad'>
              <button id="Closed-HH" value='Closed-HH' onClick={this.handleClick}>
                <audio
                  className='clip'
                  id="C" 
                  src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                ></audio>
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
