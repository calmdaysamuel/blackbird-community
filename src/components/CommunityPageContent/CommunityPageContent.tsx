import React, { Component } from "react";
import CommunityContentHeader from "../CoummunityContentHeader/CommunityContentHeader";
import PostA from "../PostA/PostA";
import PostCardA from "../PostCardA/PostCardA";
import TabSwitcher from "../TabSwitcher/TabSwitcher";
import "./CommunityPageContent.scss";
export default class CommunityPageContent extends Component {
  render() {
    return (
      <div className="community-page-content">
        <CommunityContentHeader />
        <TabSwitcher />
        <div className="posts">
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
          <PostCardA />
        </div>
      </div>
    );
  }
}
