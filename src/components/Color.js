import React from "react";
import BackgroundColorContext from "../contexts/BackgroundColorContext";

class Color extends React.Component {
  static contextType = BackgroundColorContext;

  renderDiv = (onColorChange) => {
    const values = [
      { className: "colorBox", backgroundColor: "#FF4136" },
      { className: "colorBox", backgroundColor: "#0074D9" },
      { className: "colorBox", backgroundColor: "#3D9970" },
      { className: "colorBox", backgroundColor: "#B10DC9" }
    ];
    return values.map((value, index) => {
      return (
        <div
          key={index}
          className={value.className}
          style={{ backgroundColor: value.backgroundColor }}
          onClick={() => onColorChange(value.backgroundColor)}
        />
      );
    });
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.renderDiv(this.context.onColorChange)}
      </div>
    );
  }
}

export default Color;
