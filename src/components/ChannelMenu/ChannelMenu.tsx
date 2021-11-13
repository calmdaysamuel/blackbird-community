import React, { Component } from "react";
import "./ChannelMenu.scss";
export default class ChannelMenu extends Component {
  render() {
    return (
      <div className="channel-selector">
        <p className="title">Channels</p>
        <div className="channels">
          <div className="channel active">
            <img
              src="https://media.giphy.com/media/qHyvMsnR3ZGiLnyDd1/giphy.gif"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
          <div className="channel">
            <img
              src="https://media.giphy.com/media/rZmuNlSAG5zq52gcvP/giphy.gif"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
          <div className="channel">
            <img
              src="https://media.giphy.com/media/rZmuNlSAG5zq52gcvP/giphy.gif"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
          <div className="channel">
            <img
              src="https://media.giphy.com/media/rZmuNlSAG5zq52gcvP/giphy.gif"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
          <div className="channel">
            <img
              src="https://media.giphy.com/media/rZmuNlSAG5zq52gcvP/giphy.gif"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
          <div className="channel">
            <img
              src="https://avatars.dicebear.com/api/micah/samis.svg?b=%23ee6c4d"
              alt=""
              className="channel-image"
            />
            <div className="info">
              <p className="channel-name">public</p>
              <p className="count">3456 posts</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
