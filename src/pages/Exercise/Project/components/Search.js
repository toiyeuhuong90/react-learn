import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="exampleInputAmount"
          placeholder="Search"
          name="keyword"
        />
        <div className="input-group-addon">
          <button type="button" className="btn btn-default">
            <span className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
