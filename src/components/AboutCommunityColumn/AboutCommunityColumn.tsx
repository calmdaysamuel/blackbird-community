import React, { Component } from "react";
import ChannelMenu from "../ChannelMenu/ChannelMenu";
import {
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "./AboutCommunityColumn.scss";
import ColumnFooter from "../ColumnFooter/ColumnFooter";
export default class AboutCommunityColumn extends Component {
  render() {
    return (
      <div className="about-community-column">
        <div className="content">
          <div className="community-info">
            <img
              src="https://avatars.dicebear.com/api/micah/sasfds1234123mis.svg?b=%23ee6c4d"
              alt=""
              className="cmnt-image"
            />
            <div className="names">
              <p className="display-name">Sarah Palace</p>
              <p className="community-name">c/sarahspalace</p>
            </div>
          </div>
          <div className="counts">
            <p className="member-count">17.3K followers</p>
            <p className="member-count">17.3K members</p>
          </div>
          <div className="btns">
            <button className="follow">Follow</button>
            <button className="join">Join</button>
          </div>

          <p className="about-community">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sunt pariatur a veniam distinctio ullam iusto unde, eum libero illo
            voluptatibus maxime beatae rerum doloribus perferendis doloremque
            facere minus corporis modi rem similique numquam ad veritatis sequi.
            Itaque omnis possimus, vel, sed temporibus, nemo ex atque quos est
            quibusdam blanditiis.
          </p>
          <ChannelMenu />
        </div>
        <div className="manager">
          <p className="mng">Managed with 💖 by</p>
          <div className="mnger">
            <img
              src="https://avatars.dicebear.com/api/micah/samis.svg?b=%23ee6c4d"
              alt=""
              className="ava"
            />
            <div className="ava-t">
              <div className="name">Samuel Calmday</div>
              <div className="uname">@calmday</div>
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
