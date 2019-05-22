import React from "react";

const Context = React.createContext();

export class BackgroundColorStore extends React.Component {
  state = {
    backgroundColor: "#FF4136",
    visibility: "hidden"
  };
  onColorChange = (backgroundColor) => {
    this.setState({ backgroundColor });
  };

  onToggleVisibility = () => {
    if (this.state.visibility === "hidden") {
      this.setState({ visibility: "visible" });
    } else if (this.state.visibility === "visible") {
      this.setState({ visibility: "hidden" });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onColorChange: this.onColorChange,
          onToggleVisibility: this.onToggleVisibility
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
