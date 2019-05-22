import React from "react";
import BackgroundColorContext from "../contexts/BackgroundColorContext";
import Color from "./Color";

class ColorChooser extends React.Component {
  static contextType = BackgroundColorContext;
  renderSpanStyles = () => {
    return {
      marginTop: "10px",
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "white"
    };
  };

  renderContainerStyles = (visibility) => {
    return {
      display: "flex",
      justifyContent: "center",
      visibility,
      cursor: "pointer"
    };
  };
  render() {
    const { visibility } = this.context;
    return (
      <div style={this.renderContainerStyles(visibility)}>
        <span style={this.renderSpanStyles()}>Choose a background color:</span>
        <Color />
      </div>
    );
  }
}

export default ColorChooser;
