import './Calculator.css';
import { useState } from 'react';
import React from 'react'
import { useRef } from 'react';
import { evaluate } from "mathjs";

export const Calculator = () => {

  const [lastPressed, setLastPressed] = useState(null);
  const displayRef = useRef(null);
  

  const handleClick = (value) => {
    if (lastPressed === "=") {
      displayRef.current.innerText = "";
      setLastPressed(null); 
    } 
    if ( displayRef.current.innerText === "0" ) {
      displayRef.current.innerText = "";
    }
    displayRef.current.innerText += value;
    setLastPressed(value);
  }

  function handleSum() {
    try {

      let expression = displayRef.current.innerText; 
      let result = 0;

      expression = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/÷/g, "/").replace(/−/g, "-") .replace(/√(\d+(\.\d+)?)/g, "sqrt($1)");

      const rawResult = Number(evaluate(expression));

      if (! Number.isInteger(rawResult)) {  
        result = Number(rawResult.toFixed(5));
      } else {
        result = rawResult;
      } 
      displayRef.current.innerText = result; 
      setLastPressed("=");
    } catch (error) {
      console.error("Error evaluating expression:", error);
      setLastPressed("Error");
    }
  }
  function handleCancel() {
    displayRef.current.innerText = "0";
  }

  return (
    <div className="calculator">
      <div className="display" ref={displayRef}>0</div>

      <div className="row">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("%")} className="operator">%</button>
        <button onClick={() => handleClick("√")} className="operator">√</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("×")} className="operator">×</button>
        <button onClick={() => handleClick("÷")} className="operator">÷</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")} className="operator">+</button>
        <button onClick={() => handleClick("−")} className="operator">−</button>
      </div>

      <div className="row">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={() => handleCancel()} className="cancel">C</button>
        <button onClick={() => handleSum()} className="equal">=</button>
      </div>
    </div>
  );
}
