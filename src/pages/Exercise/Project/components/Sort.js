import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a role="button" className="sort_selected">
              <span className="fa fa-sort-alpha-asc">A->Z</span>
            </a>
          </li>
          <li>
            <a role="button" className="sort_selected">
              <span className="fa fa-sort-alpha-desc">Z->A</span>
            </a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a role="button">Status Active</a>
          </li>
          <li>
            <a role="button">Status No Active</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sort;
