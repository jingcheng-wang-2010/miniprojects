import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div id="display">0</div>
        <button id="clear" className="horizontal-3">AC</button>
        <button id="divide" className="operator">/</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="multiply" className="operator">X</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="subtract" className="operator">-</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="add" className="operator">+</button>
        <button id="zero" className="horizontal-2">0</button>
        <button id="decimal">.</button>
        <button id="equal" className="operator">=</button>
      </div>
    </div>
  );
}

export default App;
