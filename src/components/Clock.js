import React from "react";
import ClockContext from "../contexts/ClockContext";

class Clock extends React.Component {
  static contextType = ClockContext;

  componentDidMount = () => {
    this.timeInterval = setInterval(() => this.context.onTimeDisplay(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timeInterval);
  };
  render() {
    const { time } = this.context;
    return (
      <div id="clockComponent">
        <h1>{time}</h1>
      </div>
    );
  }
}

export default Clock;
