import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Projeto de Inovação Integrado</h1>
        </header>
        <p className="App-intro">          
          <a href = "luise.html"> 08-Luise </a><br/>
          <a href = " luiza.html " > 09-Luiza Fortes </a><br/>
          <a href = " fernanda.html " > 10-Fernanda </a><br/>
        </p>
      </div>
    );
  }
}

export default App;
