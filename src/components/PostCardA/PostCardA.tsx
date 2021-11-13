import React, { Component } from "react";
import Tag from "../Tag/Tag";
import "./PostCardA.scss";
export default class PostCardA extends Component {
  render() {
    return (
      <div className="post-card">
        <div className="post-heading">
          <div className="pavatar">
            <img
              src="https://avatars.dicebear.com/api/micah/your-cusdfdsstom-seed.svg?b=%23ffc8dd&r=50&scale=102&translateX=2"
              alt=""
              className="image"
            />
          </div>
          <div>
            <p className="tdisplay-name">Samuel Calmday</p>
            <p className="username">@thecalmday</p>
          </div>
        </div>
        <h3 className="post-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="post-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iure
          earum tenetur et, beatae non voluptate est, nam omnis hic maiores
          ratione quasi provident vitae?
        </p>
        <div className="actions">
          <Tag />
        </div>
      </div>
    );
  }
}
