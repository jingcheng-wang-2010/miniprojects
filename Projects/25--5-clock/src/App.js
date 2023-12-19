import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons'

function App () {
  return (
    <div className='app-container'>
      <div>
        <p className='app-title'>25 + 5 Clock</p>
        <div className='length-container'>
          <p id='break-label'>Break Length</p>
          <p>
            <FontAwesomeIcon icon={faArrowUp} id='break-increment' />
            <span id='break-length'>5</span>
            <FontAwesomeIcon icon={faArrowDown} id='break-decrement' />
          </p>
        </div>
        <div className='length-container'>
          <p id='session-label'>Session Length</p>
          <p>
            <FontAwesomeIcon icon={faArrowUp} id='session-increment' />
            <span id='session-length'>25</span>
            <FontAwesomeIcon icon={faArrowDown} id='session-decrement' />
          </p>
        </div>
        <div>
          <p id='timer-label'>Session</p>
          <p id='time-left'>25:00</p>
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
