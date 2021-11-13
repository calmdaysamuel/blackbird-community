import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import PostPage from "./pages/PostPage/PostPage";

export default class App extends Component {
  render() {
    return (
      <div className="App dark">
        <div className="app-body">{this.props.children}</div>
      </div>
    );
  }
}
