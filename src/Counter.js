import React, { Component } from 'react';


class Counter extends Component {
  handleClick = () => {
    console.log("click");
  }

  render() {
    return
    <div className="hello-world">
      Counter: {counter}! <button onClick={this.handleClick()}>Click</button>
    </div>
  };
};

export default Counter;
