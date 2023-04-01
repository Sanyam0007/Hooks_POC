import React, { Component } from "react";
import "./ClassCounter.css";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="class_container">
        <p>I am a class component</p>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}
export default ClassCounter;
