import React from "react";

const Context = React.createContext();

export class ClockStore extends React.Component {
  state = {
    time: new Date().toLocaleTimeString()
  };

  onTimeDisplay = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onTimeDisplay: this.onTimeDisplay }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
