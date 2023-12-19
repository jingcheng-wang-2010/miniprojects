import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'

function App () {
  const [breakValue, setBreakValue] = useState(5)
  const [sessionValue, setSessionValue] = useState(25)
  const [timer, setTimer] = useState('25:00')
  const [timerLength, setTimerLength] = useState(25 * 60)
  const [paused, setPaused] = useState(false);

  const updateBreak = n => {
    const newValue = breakValue + n
    if (newValue > 0 && newValue <= 60) {
      setBreakValue(newValue)
    }
  }

  const updateSession = n => {
    const newValue = sessionValue + n
    if (newValue > 0 && newValue <= 60) {
      setSessionValue(newValue)
      setTimer(newValue + ':00')
      setTimerLength(newValue * 60)
    }
  }

  const togglePaused = () => {
    console.log("Clicked");
    setPaused(!paused);
  }

  const reset = () => {
    setBreakValue(5)
    setSessionValue(25)
    setTimer('25:00')
    setTimerLength(25 * 60)
  }

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      console.log("Paused:",paused);
      if (!paused) {
        const n = timerLength - 1
        setTimerLength(n)
        const timerString = Math.floor(n / 60) + ':' + (n % 60)
        setTimer(timerString)
      }
    }, 1000)

    //Clearing the interval
    return () => clearInterval(interval)
  }, [timerLength, paused])

  return (
    <div className='app-container'>
      <div>
        <p className='app-title'>25 + 5 Clock</p>
        <div className='length-container'>
          <p id='break-label'>Break Length</p>
          <p>
            <FontAwesomeIcon
              icon={faArrowUp}
              id='break-increment'
              onClick={() => updateBreak(1)}
            />
            <span id='break-length'>{breakValue}</span>
            <FontAwesomeIcon
              icon={faArrowDown}
              id='break-decrement'
              onClick={() => updateBreak(-1)}
            />
          </p>
        </div>
        <div className='length-container'>
          <p id='session-label'>Session Length</p>
          <p>
            <FontAwesomeIcon
              icon={faArrowUp}
              id='session-increment'
              onClick={() => updateSession(1)}
            />
            <span id='session-length'>{sessionValue}</span>
            <FontAwesomeIcon
              icon={faArrowDown}
              id='session-decrement'
              onClick={() => updateSession(-1)}
            />
          </p>
        </div>
        <div>
          <p id='timer-label'>Session</p>
          <p id='time-left'>{timer}</p>
        </div>
        <div>
          <div id='start_stop' onClick={togglePaused}>
            {paused ?
              <FontAwesomeIcon icon={faPlay} /> : 
              <FontAwesomeIcon icon={faPause} />
            }
          </div>
          <FontAwesomeIcon icon={faArrowsRotate} id='reset' onClick={reset} />
        </div>
        <audio id='beep' />
      </div>
    </div>
  )
}

export default App
