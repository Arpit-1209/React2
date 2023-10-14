// Calculator.js
import React, { Component } from 'react';
import Button from './Button';
import Calculator from "./Calculator.css";

class Calci extends Component {
  constructor() {
    super();
    this.state = {
      display: '0', // The current number displayed on the calculator
      currentInput: '', // The current input being entered
      previousInput: '', // The previous input entered
      operator: '', // The operator (+, -, *, /)
    };
  }

  handleButtonClick = (value) => {
    if (/[0-9]/.test(value)) {
      // If the clicked button is a digit
      this.handleDigitClick(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      // If the clicked button is an operator
      this.handleOperatorClick(value);
    } else if (value === '=') {
      // If the clicked button is the equals sign
      this.calculateResult();
    } else if (value === 'C') {
      // If the clicked button is the clear button
      this.clearCalculator();
    }
  }

  handleDigitClick = (digit) => {
    this.setState((prevState) => ({
      display: prevState.display === '0' ? digit : prevState.display + digit,
      currentInput: prevState.currentInput + digit,
    }));
  }

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      display: operator,
      previousInput: prevState.currentInput,
      currentInput: '',
      operator,
    }));
  }

  calculateResult = () => {
    const { previousInput, currentInput, operator } = this.state;
    const prevNum = parseFloat(previousInput);
    const currentNum = parseFloat(currentInput);

    if (operator === '+') {
      this.setState({
        display: prevNum + currentNum,
        currentInput: prevNum + currentNum,
        previousInput: '',
        operator: '',
      });
    } else if (operator === '-') {
      this.setState({
        display: prevNum - currentNum,
        currentInput: prevNum - currentNum,
        previousInput: '',
        operator: '',
      });
    } else if (operator === '*') {
      this.setState({
        display: prevNum * currentNum,
        currentInput: prevNum * currentNum,
        previousInput: '',
        operator: '',
      });
    } else if (operator === '/') {
      this.setState({
        display: prevNum / currentNum,
        currentInput: prevNum / currentNum,
        previousInput: '',
        operator: '',
      });
    }
  }

  clearCalculator = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: '',
    });
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <Button value="7" onClick={this.handleButtonClick} />
            <Button value="8" onClick={this.handleButtonClick} />
            <Button value="9" onClick={this.handleButtonClick} />
            <Button value="/" onClick={this.handleButtonClick} />
          </div>
          <div className="row">
            <Button value="4" onClick={this.handleButtonClick} />
            <Button value="5" onClick={this.handleButtonClick} />
            <Button value="6" onClick={this.handleButtonClick} />
            <Button value="*" onClick={this.handleButtonClick} />
          </div>
          <div className="row">
            <Button value="1" onClick={this.handleButtonClick} />
            <Button value="2" onClick={this.handleButtonClick} />
            <Button value="3" onClick={this.handleButtonClick} />
            <Button value="-" onClick={this.handleButtonClick} />
          </div>
          <div className="row">
            <Button value="0" onClick={this.handleButtonClick} />
            <Button value="C" onClick={this.handleButtonClick} />
            <Button value="=" onClick={this.handleButtonClick} />
            <Button value="+" onClick={this.handleButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calci;
