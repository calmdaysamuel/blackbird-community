import React, { Component } from "react";
import "./SearchBarA.scss";
export default class SearchBarA extends Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" className="input" placeholder="Search" />
      </div>
    );
  }
}
