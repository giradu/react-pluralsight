import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './user-card.js';
import Form from './form.js';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Hello world!!!
        </p>
        <div style={{ textAlign: 'left', padding: 20}}>
          <h3 style={{padding: 20}}>Add user from <a href="https://api.github.com/users" target="_blank" rel="noopener noreferrer">here</a> enter the <span style={{color: '#7d7d7d'}}>login</span> value</h3>
          <Form onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
