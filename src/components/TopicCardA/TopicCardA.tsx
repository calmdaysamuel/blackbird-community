import React, { Component } from "react";
import "./TopicCard.scss";
export default class TopicCardA extends Component {
  render() {
    return (
      <div className="topic">
        <div className="names">
          <p className="name">Software</p>
          <p className="count">4000 Posts</p>
        </div>
        <div>
          <p className="follow-button">Follow</p>
        </div>
      </div>
    );
  }
}
