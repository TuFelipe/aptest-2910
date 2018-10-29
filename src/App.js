import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BodyContentSample from './components/BodyContentSample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContentSample />
      </div>
    );
  }
}

export default App;
