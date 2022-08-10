import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((prevState) => ({ ...prevState, ...calculate(prevState, e.target.name) }));
  };

  return (
    <div className="calc_container">
      <div className="calc_intro">
        <h2>Lets do some Math</h2>
      </div>
      <div className="calc_body">
        <div className="output"><h2>{state.next || state.total || 0}</h2></div>
        <div className="button">
          <button name="AC" type="button" className="clear-all" onClick={handleClick}>AC</button>
          <button name="+/-" type="button" onClick={handleClick}>+/-</button>
          <button name="%" type="button" onClick={handleClick}>%</button>
          <button name="÷" type="button" className="far-right" onClick={handleClick}>÷</button>
          <button name="7" type="button" onClick={handleClick}>7</button>
          <button name="8" type="button" onClick={handleClick}>8</button>
          <button name="9" type="button" onClick={handleClick}>9</button>
          <button name="x" type="button" className="far-right" onClick={handleClick}>x</button>
          <button name="4" type="button" onClick={handleClick}>4</button>
          <button name="5" type="button" onClick={handleClick}>5</button>
          <button name="6" type="button" onClick={handleClick}>6</button>
          <button name="-" type="button" className="far-right" onClick={handleClick}>-</button>
          <button name="1" type="button" onClick={handleClick}>1</button>
          <button name="2" type="button" onClick={handleClick}>2</button>
          <button name="3" type="button" onClick={handleClick}>3</button>
          <button name="+" type="button" className="far-right" onClick={handleClick}>+</button>
          <button name="0" type="button" className="half" onClick={handleClick}>0</button>
          <button name="." type="button" onClick={handleClick}>.</button>
          <button name="=" type="button" className="far-right" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
