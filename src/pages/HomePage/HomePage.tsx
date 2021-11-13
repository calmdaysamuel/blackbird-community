import React, { Component } from "react";
import AboutCommunityColumn from "../../components/AboutCommunityColumn/AboutCommunityColumn";
import HomePageColumn from "../../components/HomePageColumn/HomePageColumn";
import PostA from "../../components/PostA/PostA";
import PrimarySidePanel from "../../components/PrimarySidePanel/PrimarySidePanel";
import "./HomePage.scss";
export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <PrimarySidePanel />
        <PostA />
        <HomePageColumn />
      </div>
    );
  }
}
