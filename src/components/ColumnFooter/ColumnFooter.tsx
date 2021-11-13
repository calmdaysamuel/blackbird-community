import React, { Component } from "react";
import "./ColumnFooter.scss";
export default class ColumnFooter extends Component {
  render() {
    return (
      <div className="footer">
        <p className="link">Home</p>
        <p className="link">Creators</p>
        <p className="link">Privacy</p>
        <p className="link">Blog</p>
        <p className="link">Terms</p>
        <p className="link">About</p>
      </div>
    );
  }
}
