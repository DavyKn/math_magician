import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

   handleClick = (e) => {
     const calcData = e.target.name;
     const calc = calculate(this.state, calcData);
     this.setState(calc);
   }

   render() {
     const { total, next } = this.state;
     return (
       <div className="calc_body">
         <div className="output"><h2>{next || total}</h2></div>
         <div className="button">
           <button name="AC" type="button" className="clear-all" onClick={this.handleClick}>AC</button>
           <button name="+/-" type="button" onClick={this.handleClick}>+/-</button>
           <button name="%" type="button" onClick={this.handleClick}>%</button>
           <button name="÷" type="button" className="far-right" onClick={this.handleClick}>÷</button>
           <button name="7" type="button" onClick={this.handleClick}>7</button>
           <button name="8" type="button" onClick={this.handleClick}>8</button>
           <button name="9" type="button" onClick={this.handleClick}>9</button>
           <button name="x" type="button" className="far-right" onClick={this.handleClick}>x</button>
           <button name="4" type="button" onClick={this.handleClick}>4</button>
           <button name="5" type="button" onClick={this.handleClick}>5</button>
           <button name="6" type="button" onClick={this.handleClick}>6</button>
           <button name="-" type="button" className="far-right" onClick={this.handleClick}>-</button>
           <button name="1" type="button" onClick={this.handleClick}>1</button>
           <button name="2" type="button" onClick={this.handleClick}>2</button>
           <button name="3" type="button" onClick={this.handleClick}>3</button>
           <button name="+" type="button" className="far-right" onClick={this.handleClick}>+</button>
           <button name="0" type="button" className="half" onClick={this.handleClick}>0</button>
           <button name="." type="button" onClick={this.handleClick}>.</button>
           <button name="=" type="button" className="far-right" onClick={this.handleClick}>=</button>
         </div>
       </div>

     );
   }
}

export default Calculator;
