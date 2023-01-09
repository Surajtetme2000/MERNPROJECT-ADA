import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import anita from "../../../images/anita.jpg";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/suraj_tetme";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={ anita }
              alt="Founder"
            />
            <Typography>Anita Tetme</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Founder of Alpha Drives and Automation
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <span>
            We, Alpha Drives And Automation are the reliable and authorised dealer of industrial automation products and systems in the city. Located at Thane, Maharashtra, we provide quality products and systems to our clients. Also, we render expert services in terms of installation, commissioning, retrofits, repair and maintenance to the mentioned products and systems. Contact us today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
