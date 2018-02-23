import React, { Component } from "react";

class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }
  render() {
    return (
      <div className="col-lg-12 col-sm-12">
        <p>Color: {this.props.color} - Font-size: {this.props.fontSize}px</p>
        <div id="content" style={this.setStyle()}>
          Display content
        </div>
      </div>
    );
  }
}

export default Result;
