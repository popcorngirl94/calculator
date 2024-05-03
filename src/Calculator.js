import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [hasDecimal, setHasDecimal] = useState(false);
  const [expressionHistory, setExpressionHistory] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
    setExpressionHistory(expressionHistory + num);
  };

  const handleOperatorClick = (op) => {
    if (display !== '0') {
      if (operator === '') {
        setOperator(op);
        setPrevValue(display);
        setDisplay('');
        setHasDecimal(false);
        setExpressionHistory(expressionHistory + op);
      } else if (op !== operator) {
        setOperator(op);
        setPrevValue(prevValue + operator + display);
        setDisplay('');
        setHasDecimal(false);
        setExpressionHistory(expressionHistory + op);
      }
    }
  };

  const handleDecimalClick = () => {
    if (!hasDecimal) {
      setDisplay(display + '.');
      setHasDecimal(true);
      setExpressionHistory(expressionHistory + '.');
    }
  };

  const handleEqualsClick = () => {
    const result = eval(prevValue + operator + display).toString();
    setDisplay(result);
    setOperator('');
    setPrevValue('');
    setHasDecimal(false);
    setExpressionHistory('');
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperator('');
    setPrevValue('');
    setHasDecimal(false);
    setExpressionHistory('');
  };

  return (
    <div className="calculator">
      <div id="expression-history" className="exp">{expressionHistory}</div>
      <div id="display" className="display">{display}</div>
      <div className="button-row">
        <button id="clear" onClick={handleClearClick}>C</button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
        <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
        <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button id="four" onClick={() => handleNumberClick('4')}>4</button>
        <button id="five" onClick={() => handleNumberClick('5')}>5</button>
        <button id="six" onClick={() => handleNumberClick('6')}>6</button>
        <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button id="one" onClick={() => handleNumberClick('1')}>1</button>
        <button id="two" onClick={() => handleNumberClick('2')}>2</button>
        <button id="three" onClick={() => handleNumberClick('3')}>3</button>
        <button id="equals" onClick={handleEqualsClick}>=</button>
      </div>
      <div className="button-row">
        <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button id="decimal" onClick={handleDecimalClick}>.</button>
      </div>
    </div>
  );
}

export default Calculator;
