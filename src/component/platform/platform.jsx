import React from "react";
import "./platform.scss";
import Platforms from "../../assets/platforms.png";
import CustomButton from "../button/button";
import SeamlessIcon from "../../assets/seamless.png";
import Container from "../container/container";
import SteamIcon from "../../assets/stream.png";
import SpotifyIcon from "../../assets/spotify.png";
import YoutubeIcon from "../../assets/youtube.png";
import NetflixIcon from "../../assets/netflix.png";
import DotLeft from "../../assets/dot-left.png";
import DotRight from "../../assets/dot-right.png";
import Card from "../card/card";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router";

const Platform = () => {
  const navigate = useNavigate();
  return (
    <div className="platform">
      <div className="plat-box">
        <div className="platform-headers">
          <img src={Platforms} alt="icon" />
        </div>
        <section className="seamless">
          <div className="s-left">
            <img src={SeamlessIcon} alt="icon" />
          </div>
          <div className="s-right">
            <div className="s-right-hd">
              <span>A Seamless</span>
              <span>Experience Across</span>
              <span>All Digital Platforms</span>
            </div>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
            <div className="btn">
              <CustomButton>View Plans</CustomButton>
            </div>
          </div>
        </section>
        <section className="packages">
          <div className="p-left">
            <div className="p-left-hd">
              <span>Get the Best out of</span>
              <span>your Digital</span>
              <span>Packages</span>
              <span>All in ine place!</span>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
            <div className="btn">
              <CustomButton onClick={() => navigate("/register")}>
                Sign Up
              </CustomButton>
            </div>
          </div>
          <div className="p-right">
            <Container
              icon={SteamIcon}
              txt1="Steam"
              txt2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            />
            <Container
              icon={YoutubeIcon}
              txt1="Youtube"
              txt2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            />
            <Container
              icon={SpotifyIcon}
              txt1="Spotify"
              txt2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            />
            <Container
              icon={NetflixIcon}
              txt1="Netflix"
              txt2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            />
          </div>
        </section>
        <section className="plans" id="plans">
          <div className="plans-head">
            <span>Our Plans Finely Curated</span>
            <span>Just For You!</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </span>
          </div>
          <div className="plans-card">
            <Card title="Personal" price="12.99" icon1={<MdDone />} />
            <Card
              title="Pro"
              price="24.99"
              icon1={<MdDone />}
              icon3={<MdDone />}
              icon4={<MdDone />}
            />
            <Card
              title="Family"
              price="44.99"
              icon1={<MdDone />}
              icon2={<MdDone />}
              icon3={<MdDone />}
              icon4={<MdDone />}
            />
          </div>
          <div className="dot-left">
            <img src={DotLeft} alt="dot" />
          </div>
          <div className="dot-right">
            <img src={DotRight} alt="dot" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Platform;
