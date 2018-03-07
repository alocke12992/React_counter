import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = { value: 0 } 

  inc = () => {
    this.setState( (state) => {
      return { value: state.value + 1}
    })
  } 

  dec = () => {
    const { value } = this.state 
    if ( value > 0 ) 
    this.setState( (state) => {
      return { value: state.value - 1 }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Andrew's React App</h1>
        </header>
  
        <div>
          <p>{this.state.value}</p> 
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button> 
        </div>
      </div>
    );
  }
}

export default App;
