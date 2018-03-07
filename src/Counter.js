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
    const { name } = this.props
    const { value } = this.state
    const { color } = this.props
    return (
      <div style={ {backgroundColor: color, color: "white"}}>
        <p>{name} Counter</p>
        <p>{value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Counter;
