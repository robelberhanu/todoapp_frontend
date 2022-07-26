import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
         My Hello
         <FirstComponent></FirstComponent>
      </div>
     );
  }
}
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
         My Hello
      </div>
    );
  }
}
export default App;


