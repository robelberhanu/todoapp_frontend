import React, { Component } from 'react';
import logo from './logo.svg';
// import FirstComponent from './components/firstComponent'
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        Hi
      </div>
     );
  }
}

this class helps us retain the learning component classes. We want to make a counter class now.
class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
         <FirstComponent></FirstComponent>
      </div>
    );
  }
}
  
 
export default App;


