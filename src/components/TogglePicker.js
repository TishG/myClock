import React from "react";
import BackgroundColorContext from "../contexts/BackgroundColorContext";

class TogglePicker extends React.Component {
  static contextType = BackgroundColorContext;
  renderButtonText = (visibility) => {
    if (visibility === "hidden") {
      return "Change background color";
    } else if (visibility === "visible") {
      return "Hide color picker";
    }
  };

  renderbuttonContainerStyles = () => {
    return {
      textAlign: "center",
      paddingTop: "5px",
    };
  };

  renderButtonStyles = (backgroundColor) => {
    return {
      backgroundColor: backgroundColor,
      color: "white",
      border: "2px solid white",
      borderRadius: "0.4rem",
      padding: "5px",
      fontSize: "1rem",
      cursor: 'pointer'
    };
  };
  render() {
    const { onToggleVisibility, visibility, backgroundColor } = this.context;
    return (
      <div style={this.renderbuttonContainerStyles()}>
        <button
          onClick={() => onToggleVisibility()}
          style={this.renderButtonStyles(backgroundColor)}
        >
          {this.renderButtonText(visibility)}
        </button>
      </div>
    );
  }
}

export default TogglePicker;
