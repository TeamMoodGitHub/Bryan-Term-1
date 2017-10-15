import React, { Component } from 'react';
import logo from './League_of_Legends_Icon.png';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World!</h2>
        </div>

        <p className="App-intro">
        {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
