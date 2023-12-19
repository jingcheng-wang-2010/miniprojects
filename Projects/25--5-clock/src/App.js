import './App.css';

function App() {
  return (
    <div className="App">
      <p>25 + 5 Clock</p>
      <div>
        <p id="break-label">Break Length</p>
        <p>
          <i className='fa fa-arrow-up'></i>
          5
          <i className='fa fa-arrow-down'></i>
        </p>
      </div>
      <div>
        <p>Session Length</p>
        <p>
          <i className='fa fa-arrow-up'></i>
          25
          <i className='fa fa-arrow-down'></i>
        </p>
      </div>
      <div>
        <p>Session</p>
        <p>25:00</p>
      </div>
      <div>
        <i className='fa fa-play'></i>
        <i className='fa fa-pause'></i>
        <i className='fa fa-arrows-rotate'></i>
      </div>
    </div>
  );
}

export default App;
