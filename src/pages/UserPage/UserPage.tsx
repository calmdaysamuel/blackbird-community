import React, { Component } from "react";
import AboutUserColumn from "../../components/AboutUserColumn/AboutUserColumn";
import CommunityPageContent from "../../components/CommunityPageContent/CommunityPageContent";
import PrimarySidePanel from "../../components/PrimarySidePanel/PrimarySidePanel";
import "./UserPage.scss";
export default class UserPage extends Component {
  render() {
    return (
      <div className="user-page">
        <PrimarySidePanel />
        <CommunityPageContent />
        <AboutUserColumn />
      </div>
    );
  }
}
