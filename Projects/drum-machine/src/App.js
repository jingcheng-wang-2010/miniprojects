//import React from 'react'
//import ReactDOM from 'react-dom/client'
import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [display, setDisplay] = useState('')

  // event handler for when drum pad button is clicked
  const handleClick = e => {
    // update display text
    setDisplay(e.target.id)
    //play audio linked to the drum pad button
    const audio = new Audio(e.target.firstChild.src)
    audio.play()
  }

  //const useKeyDown = (callback, keys) => {
    const onKeyDown = event => {
      var keyPressed = event.key
      switch (keyPressed) {
        case 'q':
        case 'w':
        case 'e':
        case 'a':
        case 's':
        case 'd':
        case 'z':
        case 'x':
        case 'c':
          setDisplay(
            document.getElementById(keyPressed.toUpperCase()).parentElement
              .id
          )
          const audio = new Audio(
            document.getElementById(keyPressed.toUpperCase()).src
          )
          //alert(document.getElementById(keyPressed.toUpperCase()).src)
          audio.play()
          break
        default:
          break
    }
  };
  //}

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [onKeyDown]);

      

  return (
    <div className='App'>
      <div id='drum-machine'>
        <div id='display-container'>
          <p id='display'>{display}</p>
        </div>
        <div className='pad-container'>
          <div
            className='drum-pad'
            id='Heater-1'
            value='Heater-1'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id="Q"
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            ></audio>
            Q
          </div>
          <div
            className='drum-pad'
            id='Heater-2'
            value='Heater-2'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='W'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            ></audio>
            W
          </div>
          <div
            className='drum-pad'
            id='Heater-3'
            value='Heater-3'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='E'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            ></audio>
            E
          </div>
          <div
            className='drum-pad'
            id='Heater-4'
            value='Heater-4'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='A'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            ></audio>
            A
          </div>
          <div
            className='drum-pad'
            id='Clap'
            value='Clap'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='S'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            ></audio>
            S
          </div>
          <div
            className='drum-pad'
            id='Open-HH'
            value='Open-HH'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='D'
              src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            ></audio>
            D
          </div>
          <div
            className='drum-pad'
            id="Kick-n'-Hat"
            value="Kick-n'-Hat"
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='Z'
              src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            ></audio>
            Z
          </div>
          <div
            className='drum-pad'
            id='Kick'
            value='Kick'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='X'
              src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            ></audio>
            X
          </div>
          <div
            className='drum-pad'
            id='Closed-HH'
            value='Closed-HH'
            onClick={handleClick}
          >
            <audio
              className='clip'
              id='C'
              src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            ></audio>
            C
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
