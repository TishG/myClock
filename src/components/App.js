import React from "react";

import "../index.css";
import BackgroundColorContext from "../contexts/BackgroundColorContext";
import Clock from "./Clock";
import TogglePicker from "./TogglePicker";
import ColorChooser from './ColorChooser';

class App extends React.Component {
  static contextType = BackgroundColorContext;

  renderContainerStyles = (backgroundColor) => {
    return {
      backgroundColor: backgroundColor,
      height: "100vh",
      width: "100vw"
    };
  };
  render() {
    const { backgroundColor } = this.context;
    return (
      <div style={this.renderContainerStyles(backgroundColor)}>
        <TogglePicker />
        <ColorChooser />
        <Clock />
      </div>
    );
  }
}

export default App;
