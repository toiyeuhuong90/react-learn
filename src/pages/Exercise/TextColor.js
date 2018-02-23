import React, { Component } from "react";
import "./TextColor.css";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";

class TextColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15
    };
  }

  onSetColor = params => {
    this.setState({
      color: params
    });
  };

  onChangeSize = value => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  };

  onSettingDefault = value => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 15
      });
    }
  };
  render() {
    return (
      <div className="container" style={{marginTop:30, marginBottom:30}}>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
          </div>

          <div className="col-lg-6 col-sm-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default TextColor;
