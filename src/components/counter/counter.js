import React, { Component } from "react";
import './counter.css'

class Counter extends Component(){

    // Define the initial state in a constructor
    // state => counter 0
    constructor(){

        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this); // make the state available to increment method
    }
    render(){
    return(
        <div className="counter">
            <button onClick={this.increment}>{ this.state.counter}</button>
            <span className="count">0</span>
        </div> 
    );
}
    increment(){ 
    this.setState({
        counter: this.state.counter + 1
    });
}
}


export default Counter