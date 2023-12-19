import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faPlay, faPause, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <p>25 + 5 Clock</p>
      <div>
        <p id="break-label">Break Length</p>
        <p>
          <FontAwesomeIcon icon={faArrowUp} />
          5
          <FontAwesomeIcon icon={faArrowDown} />
        </p>
      </div>
      <div>
        <p>Session Length</p>
        <p>
          <FontAwesomeIcon icon={faArrowUp} />
          25
          <FontAwesomeIcon icon={faArrowDown} />
        </p>
      </div>
      <div>
        <p>Session</p>
        <p>25:00</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faArrowsRotate} />
      </div>
    </div>
  );
}

export default App;
