import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc_body">
        <div className="output"><h2>0</h2></div>
        <div className="button">
          <button type="button" className="clear-all">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="far-right">/</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="far-right">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="far-right">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="far-right">+</button>
          <button type="button" className="half">0</button>
          <button type="button">.</button>
          <button type="button" className="far-right">=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
