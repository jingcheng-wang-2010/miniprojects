import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function App () {
  const [breakValue, setBreakValue] = useState(5);
  const [sessionValue, setSessionValue] = useState(25);
  const [timer, setTimer] = useState("25:00");

  const updateBreak = n => {
    const newValue = breakValue + n;
    if (newValue > 0 && newValue <= 60) {
      setBreakValue(newValue);
    }
  }

  const updateSession= n => {
    const newValue = sessionValue + n;
    if (newValue > 0 && newValue <= 60) {
      setSessionValue(newValue);
      setTimer(newValue+":00");
    }
  }

  return (
    <div className='app-container'>
      <div>
        <p className='app-title'>25 + 5 Clock</p>
        <div className='length-container'>
          <p id='break-label'>Break Length</p>
          <p>
            <FontAwesomeIcon icon={faArrowUp} id='break-increment' onClick={() => updateBreak(1)} />
            <span id='break-length'>{breakValue}</span>
            <FontAwesomeIcon icon={faArrowDown} id='break-decrement' onClick={() => updateBreak(-1)} />
          </p>
        </div>
        <div className='length-container'>
          <p id='session-label'>Session Length</p>
          <p>
            <FontAwesomeIcon icon={faArrowUp} id='session-increment' onClick={() => updateSession(1)} />
            <span id='session-length'>{sessionValue}</span>
            <FontAwesomeIcon icon={faArrowDown} id='session-decrement' onClick={() => updateSession(-1)} />
          </p>
        </div>
        <div>
          <p id='timer-label'>Session</p>
          <p id='time-left'>{timer}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlay} id='start_stop' />
          <FontAwesomeIcon icon={faPause} />
          <FontAwesomeIcon icon={faArrowsRotate} id='reset' />
        </div>
        <audio id='beep' />
      </div>
    </div>
  )
}

export default App
