import React, { Component } from "react";
import "./TabSwicther.scss";
export default class TabSwitcher extends Component {
  render() {
    return (
      <div className="tab-switcher">
        <p className="option ">Trending</p>
        <p className="option">Lastest</p>
        <p className="option">Top</p>
      </div>
    );
  }
}
