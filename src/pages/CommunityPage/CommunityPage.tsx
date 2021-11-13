import React, { Component } from "react";
import AboutCommunityColumn from "../../components/AboutCommunityColumn/AboutCommunityColumn";
import CommunityPageContent from "../../components/CommunityPageContent/CommunityPageContent";
import PrimarySidePanel from "../../components/PrimarySidePanel/PrimarySidePanel";
import "./CommunityPage.scss";
export default class CommunityPage extends Component {
  render() {
    return (
      <div className="community-page">
        <PrimarySidePanel />
        <CommunityPageContent />
        <AboutCommunityColumn />
      </div>
    );
  }
}
