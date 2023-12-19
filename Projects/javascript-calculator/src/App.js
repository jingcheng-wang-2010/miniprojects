import './App.css';
import React, { useState, useEffect} from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState(null)
  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)
  const [newValue, setNewValue] = useState(true)
  const [lastInput, setLastInput] = useState(null);
  const [makeNegative, setMakeNegative] = useState(false);

  function debug() {
    //React.useEffect (() => {
      console.log("display:",display);
      console.log("Value1:",value1);
      console.log("Value2:",value2);
      console.log("operator:",operator);
      console.log("newValue:",newValue);
      console.log("lastInput:",lastInput);
      console.log("makeNegative:",makeNegative);
    //}, [display, value1, value2, operator, newValue, lastInput])
  }

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
          if (makeNegative === true && e.target.innerText !== '0'){
            setDisplay("-"+e.target.innerText);
            setMakeNegative(false);
          }
          else {
            setDisplay(e.target.innerText)
          }
          if (e.target.innerText !== '0') {
            setNewValue(false);
          }
          if (lastInput === "equals") {
            setValue1(null);
            setOperator("");
            setValue2(null);
          }
        }
        else {
          setDisplay(display + e.target.innerText);
        }
        setLastInput("number");
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
        setLastInput("decimal");
        break;
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
        //var lastInputTemp = e.target.id
        if (value1 === null) {
          setValue1(Number(display));
        }
        else if (newValue === false) {
          setValue2(Number(display));
          const result = processEquation(value1, operator, Number(display));
          setDisplay(result);
          setValue1(result);
          setValue2(null);
        }
        console.log("target id:",e.target.id)
        if (e.target.id === "subtract" && (lastInput === "divide" || lastInput === "multiply" ||
          lastInput === "subtract" || lastInput === "add")) {
            console.log("p1")
            setOperator(lastInput);
            setMakeNegative(true);
            //lastInputTemp = lastInput
        }
        else {
          console.log("p2")
          setOperator(e.target.id);
          setMakeNegative(false);
        }
        setValue2(null);
        setNewValue(true);
        setLastInput(e.target.id);
        debug();
        break;
      case "equals":
        if (value1 !== null && operator !== null) {
          if (value2 === null) {
            setValue2(Number(display));
            const result = processEquation(value1, operator, Number(display));
            setDisplay(result);
            setValue1(result);
          }
          else {
            const result = processEquation(value1, operator, value2);
            setDisplay(result);
            setValue1(result);
          }
        }
        setNewValue(true);
        setLastInput("equals");
        debug();
        break;
      case "clear":
          setDisplay('0');
          setNewValue(true);
          setValue1(null);
          setValue2(null);
          setOperator(null);
          setLastInput(null);
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
