import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as math from 'mathjs'; //make sure mathjs is installed, use command "yarn add mathjs" to install
class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state = { input:""}; // store all the input values as a string
  }
  // Adds the input to values already entered
  addToInput = (e) => {
    this.setState({
      input: this.state.input + e.target.value}); // takes the last state and adds the current input to it
  };
  // Conducts calculation
  calculate = () => {
    this.setState({ 
      input: math.evaluate(this.state.input)}); // Uses math.js to conduct calculation of the string input
  };
  // Clears the input
  clear = () => {
    this.setState({
      input: ""}); // sets the input value to be empty
  };
  render(){
    return(
      <div className="App">
        <div className = "Head">
          <h1>Welcome to the Calculator App</h1>
        </div>
        <div className = "calc-Wrapper">
          <div className = "Input">
            <h2> {this.state.input}</h2>
          </div>
          <div className= "calcStyle">
            <button class = "buttonStyle" onClick={this.addToInput} value = "7" >7</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "8" >8</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "9" >9</button>
            <button class = "opButtonStyle" onClick={this.addToInput} value = "/" >/</button>
          </div>
          <div className= "calcStyle">
            <button class = "buttonStyle" onClick={this.addToInput} value = "4" >4</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "5" >5</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "6" >6</button>
            <button class = "opButtonStyle" onClick={this.addToInput} value = "*" >x</button>
          </div>
          <div className= "calcStyle">
            <button class = "buttonStyle" onClick={this.addToInput} value = "1" >1</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "2" >2</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "3" >3</button>
            <button class = "opButtonStyle" onClick={this.addToInput} value = "+" >+</button>
          </div>
          <div className= "calcStyle">
            <button class = "buttonStyle" onClick={this.addToInput} value = "." >.</button>
            <button class = "buttonStyle" onClick={this.addToInput} value = "0" >0</button>
            <button class = "buttonStyle" onClick={this.calculate} value = "=" >=</button>
            <button class = "opButtonStyle" onClick={this.addToInput} value = "-" >-</button>
          </div>
          <div className= "calcStyle">
            <button class = "Clear" onClick={this.clear}>AC</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Buttons;
ReactDOM.render(<Buttons />,document.getElementById('root'));