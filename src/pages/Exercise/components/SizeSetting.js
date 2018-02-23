import React, { Component } from "react";

class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Size : {this.props.fontSize}</h3>
        </div>
        <div className="card-block" style={{ margin: 15 }}>
          <button
            type="button"
            className="btn btn-success"
            style={{ marginRight: 10 }}
            onClick={() => this.changeSize(-2)}
          >
            Down
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(+2)}
          >
            Up
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
