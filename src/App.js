import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const Result = (props) => {
  return (
    <div>
    { props.counter }
    </div>
  );
};

class App extends Component {
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div className="App parent-margin">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Hello world!!!
        </p>
        <div className="increment-btn-wrap parent-margin">
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={2} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </div>
      </div>
    );
  }
}

export default App;
