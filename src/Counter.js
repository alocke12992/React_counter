import React from "react";

class Counter extends React.Component {
  state = { value: 0 };

  inc = () => {
    this.setState(state => {
      return { value: state.value + 1 };
    });
  };

  dec = () => {
    const { value } = this.state;
    if (value > 0)
      this.setState(state => {
        return { value: state.value - 1 };
      });
  };

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Counter;
