import React, { Component } from "react";
import UserCardA from "../UserCardA/UserCardA";
import "./CommunityCardA.scss";
export default class CommunityCardA extends Component {
  render() {
    return (
      <div className="community-card">
        <div className="community-info">
          <img
            src="https://avatars.dicebear.com/api/micah/sasfds1234123mis.svg?b=%23ee6c4d"
            alt=""
            className="community-image"
          />
          <div className="names">
            <p className="cdisplay-name">Sarah Palace</p>
            <p className="community-name">c/sarahspalace</p>
          </div>
        </div>
        <p className="follow-button">Follow</p>
      </div>
    );
  }
}
