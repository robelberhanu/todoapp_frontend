import React, { Component } from "react";
import './counter.css'

class Counter extends Component(){

    // Define the initial state in a constructor
    // state => counter 0
    render(){
    return(
        <div className="counter">
            <button onClick={this.increment}>+1</button>
            <span className="count">0</span>
        </div> 
    );
}
    increment(){
    console.log('increment')
}
}


export default Counter