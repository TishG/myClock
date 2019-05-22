import React from "react";
import ClockContext from "../contexts/ClockContext";

class Clock extends React.Component {
  static contextType = ClockContext;

  componentDidMount = () => {
    this.timeInterval = setInterval(() => this.context.onTimeDisplay(), 1000);
    this.dateInterval = setInterval(() => this.context.onDateDisplay(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timeInterval);
    clearInterval(this.dateeInterval);
  };
  renderClockStyles = () => {
    return {
      display: "flex",
      flexDirection: "column"
    }
  };
  render() {
    const { time, date } = this.context;
    return (
      <div id="clockComponent" style={this.renderClockStyles()}>
        <h1>{time}</h1>
        <h3>{date}</h3>
      </div>
    );
  }
}

export default Clock;
