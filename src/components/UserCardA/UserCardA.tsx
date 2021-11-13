import React, { Component } from "react";
import "./UserCardA.scss";
export default class UserCardA extends Component {
  render() {
    return (
      <div className="user-card">
        <div className="user-info">
          <img
            src="https://avatars.dicebear.com/api/micah/sasfds1234123mis.svg?b=%23ee6c4d"
            alt=""
            className="iuser-image"
          />
          <div className="names">
            <p className="udisplay-name">Sarah Palace</p>
            <p className="user-name">@sarahspalace</p>
          </div>
        </div>
        <p className="follow-button">Follow</p>
      </div>
    );
  }
}
