import React from "react";
import BackgroundColorContext from "../contexts/BackgroundColorContext";

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
    const { visibility, onColorChange } = this.context;
    return (
      <div
        id="colorBoxContainer"
        style={this.renderContainerStyles(visibility)}
      >
        <span style={this.renderSpanStyles()}>Choose a background color:</span>
        <div
          className="colorBox"
          style={{ backgroundColor: "#FF4136" }}
          onClick={() => onColorChange("#FF4136")}
        />
        <div
          className="colorBox"
          style={{ backgroundColor: "#0074D9" }}
          onClick={() => onColorChange("#0074D9")}
        />
        <div
          className="colorBox"
          style={{ backgroundColor: "#3D9970" }}
          onClick={() => onColorChange("#3D9970")}
        />
        <div
          className="colorBox"
          style={{ backgroundColor: "#B10DC9" }}
          onClick={() => onColorChange("#B10DC9")}
        />
      </div>
    );
  }
}

export default ColorChooser;
