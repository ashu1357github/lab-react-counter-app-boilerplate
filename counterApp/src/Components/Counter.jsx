// Counter.jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (     
      <div>
        <div>
        <h1>{this.state.count}</h1>
        </div>
        <div className='flexbox'>
          <button className='card1' onClick={this.handleIncrement}>Increment</button>
          <button className='card1' onClick={this.handleDecrement}>Decrement</button>
          <button className='card1' onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;