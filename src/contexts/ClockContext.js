import React from "react";

const Context = React.createContext();

export class ClockStore extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    date: new Date()
      .toUTCString()
      .split(" ")
      .slice(0, 4)
      .join(" ")
  };

  onTimeDisplay = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };
  onDateDisplay = () => {
    this.setState({
      date: new Date()
        .toUTCString()
        .split(" ")
        .slice(0, 4)
        .join(" ")
    });
  };
  render() {
    console.log(this.state.date);
    return (
      <Context.Provider
        value={{
          ...this.state,
          onTimeDisplay: this.onTimeDisplay,
          onDateDisplay: this.onDateDisplay
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
