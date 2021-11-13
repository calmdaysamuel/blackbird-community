import React, { Component } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ChannelMenu from "../ChannelMenu/ChannelMenu";
import ColumnFooter from "../ColumnFooter/ColumnFooter";
import CommunityCardA from "../CommunityCardA/CommunityCardA";
import "./AboutUserColumn.scss";
export default class AboutUserColumn extends Component {
  render() {
    return (
      <div className="about-user-column">
        <div className="content">
          <div className="user-info">
            <img
              src="https://avatars.dicebear.com/api/micah/sasfds1234123mis.svg?b=%23ee6c4d"
              alt=""
              className="user-image"
            />
            <div className="names">
              <p className="display-name">Sarah Palace</p>
              <p className="community-name">@sarahspalace</p>
            </div>
          </div>
          <div className="counts">
            <p className="member-count">17.3K followers</p>
            <p className="member-count">5.3K following</p>
          </div>
          <div className="btns">
            <button className="follow">Follow</button>
          </div>

          <p className="about-user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sunt pariatur a veniam distinctio ullam iusto unde, eum libero illo
            voluptatibus maxime beatae rerum doloribus perferendis doloremque
            facere minus corporis modi rem similique numquam ad veritatis sequi.
            Itaque omnis possimus, vel, sed temporibus, nemo ex atque quos est
            quibusdam blanditiis.
          </p>
          <div className="my-communities">
            <p className="u-title">My Communities</p>
            <div className="communities">
              <CommunityCardA />
              <CommunityCardA />
              <CommunityCardA />
              <CommunityCardA />
              <CommunityCardA />
            </div>
          </div>
        </div>

        <div className="social-links">
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaFacebook className="icon" />
          <FaYoutube className="icon" />
          <FaDiscord className="icon" />
        </div>

        <ColumnFooter />
      </div>
    );
  }
}
