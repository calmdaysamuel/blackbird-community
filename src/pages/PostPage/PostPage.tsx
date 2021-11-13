import React, { Component, useEffect } from "react";
import { useParams } from "react-router";

import AboutCommunityColumn from "../../components/AboutCommunityColumn/AboutCommunityColumn";
import PostA from "../../components/PostA/PostA";
import PrimarySidePanel from "../../components/PrimarySidePanel/PrimarySidePanel";
import "./PostPage.scss";

export default class PostPage extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="post-page">
        <PrimarySidePanel />
        <PostA />
        <AboutCommunityColumn />
      </div>
    );
  }
}
