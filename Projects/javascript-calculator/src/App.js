import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState('')
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(null)
  const [newValue, setNewValue] = useState(true)

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
      
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
      case "equals":
        if (value1 === 0) {
          setValue1(Number(display));
          if (e.target.id !== 'equals') {
            setDisplay(e.target.innerText);
            setOperator(e.target.id);
          }
        }
        else {
          if (operator === "divide") {
            setDisplay(value1 / Number(display))
          }
          else if (operator === "multiply") {
            setDisplay(value1 * Number(display))
          } 
          else if (operator === "subtract") {
            setDisplay(value1 - Number(display))
          } 
          else if (operator === "add") {
            setDisplay(value1 + Number(display))
          }
          setOperator(e.target.id);
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
        <button id="equal" className="operator" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
