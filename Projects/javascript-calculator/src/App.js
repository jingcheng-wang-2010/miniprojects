import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState('')
  const [value1, setValue1] = useState(null)
  //const [value2, setValue2] = useState(null)
  const [newValue, setNewValue] = useState(true)

  const processEquation = (v1, opt, v2) => {
    var result = 0;
    if (opt === "divide") {
      result = v1 / v2;
    }
    else if (opt === "multiply") {
      result = v1 * v2;
    } 
    else if (opt === "subtract") {
      result = v1 - v2;
    } 
    else if (opt=== "add") {
      result = v1 + v2;
    }
    return result;
  }

  const handleClick = e => {
    switch (e.target.id) {
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
      case "zero":
      
        //if (display === '0' || display === '/' || display === 'X' || display === '+' || display === '-') {
        if (newValue === true) {
          setDisplay(e.target.innerText)
          console.log('1 Display:', display);
          if (e.target.innerText !== '0') {
            setNewValue(false);
            console.log('1-1');
          }
        }
        else {
          setDisplay(display + e.target.innerText);
          console.log('2 Display:', display);
        }
        //alert(display);
        break;
      case "decimal":
        console.log(display);
        console.log(display.indexOf("."));
        if (newValue === true) {
          setDisplay("0.");
          setNewValue(false);
        }
        
        else if (display.indexOf(".") === -1) {
          setDisplay(display + e.target.innerText);
        }
        break;
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
        if (value1 === null) {
          setValue1(Number(display));
        }
        else {
          const value2 = processEquation(value1, operator, Number(display));
          setDisplay(value2);
          setValue1(value2);
        }
        setOperator(e.target.id);
        setNewValue(true);
        break;
      case "equals":
        if (value1 !== null) {
          const value2 = processEquation(value1, operator, Number(display));
          setDisplay(value2);
          setValue1(value2);
        }
        setNewValue(true);
        break;
      case "clear":
          setDisplay('0');
          setNewValue(true);
          setValue1(0);
          break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div id="display">{display}</div>
        <button id="clear" className="horizontal-3" onClick={handleClick}>AC</button>
        <button id="divide" className="operator" onClick={handleClick}>/</button>
        <button id="seven" onClick={handleClick}>7</button>
        <button id="eight" onClick={handleClick}>8</button>
        <button id="nine" onClick={handleClick}>9</button>
        <button id="multiply" className="operator" onClick={handleClick}>X</button>
        <button id="four" onClick={handleClick}>4</button>
        <button id="five" onClick={handleClick}>5</button>
        <button id="six" onClick={handleClick}>6</button>
        <button id="subtract" className="operator" onClick={handleClick}>-</button>
        <button id="one" onClick={handleClick}>1</button>
        <button id="two" onClick={handleClick}>2</button>
        <button id="three" onClick={handleClick}>3</button>
        <button id="add" className="operator" onClick={handleClick}>+</button>
        <button id="zero" className="horizontal-2" onClick={handleClick}>0</button>
        <button id="decimal" onClick={handleClick}>.</button>
        <button id="equals" className="operator" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
