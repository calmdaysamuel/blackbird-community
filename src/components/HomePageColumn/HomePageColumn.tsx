import React, { Component } from "react";
import ColumnFooter from "../ColumnFooter/ColumnFooter";
import CommunityCardA from "../CommunityCardA/CommunityCardA";
import SearchBarA from "../SearchBarA/SearchBarA";
import Tag from "../Tag/Tag";
import TopicCardA from "../TopicCardA/TopicCardA";
import UserCardA from "../UserCardA/UserCardA";
import "./HomePageColumn.scss";
export default class HomePageColumn extends Component {
  render() {
    return (
      <div className="home-page-column">
        <SearchBarA />
        <p className="title">Recommended Communities</p>
        <div className="recommended">
          <CommunityCardA />
          <CommunityCardA />
          <CommunityCardA />
          <CommunityCardA />
        </div>
        <p className="title">Recommended Creators</p>
        <div className="recommended">
          <UserCardA />
          <UserCardA />
          <UserCardA />
          <UserCardA />
        </div>

        <p className="title">Recommended Topics</p>
        <div className="recommended">
          <TopicCardA />
          <TopicCardA />
          <TopicCardA />
          <TopicCardA />
          <TopicCardA />
          <TopicCardA />
        </div>
        <ColumnFooter />
      </div>
    );
  }
}
