import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#dcdcdc"]
    };
  }
  showColor(color) {
    return {
      backgroundColor: color
    };
  }

  setActiveColor(color){
      this.props.onReceiveColor(color);
  }
  render() {
    const elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "act" : ""}
          onClick = {() => this.setActiveColor(color)}
        />
      );
    });
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Color Picker</h3>
        </div>
        <div className="card-block" style={{ margin: 15 }}>
          {elmColors}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
