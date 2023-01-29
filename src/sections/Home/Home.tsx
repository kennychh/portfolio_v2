import "./Home.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SearchForm, Button } from "../../components";
import coffeCup from "../../assets/coffee_cup.png";
import fire from "../../assets/fire.png";
import handshake from "../../assets/handshake.png";
import sakura from "../../assets/sakura.png";
import sunglasses from "../../assets/sunglasses.png";
import Star from "../../assets/star.svg";
import background from "../../assets/Slide 16_9 - 1.png";
import useWindowDimensions from "../../utils.js";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { TABLET_WIDTH } from "../../constants.js";
type HomeProps = {
  theme: string;
};
const Home: React.FC<HomeProps> = ({ theme }) => {
  const { height, width } = useWindowDimensions();
  var navBarHeight = "-80px";

  return (
    <div className="home-container">
      <div
        className="Home"
        style={{
          marginTop: navBarHeight,
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <img src={background} className="cirlce-image" />
        <h1
          style={width >= TABLET_WIDTH ? styles.h1 : { ...styles.h1, fontSize: "64px" }}
        >
          Building elegant digital experiences
        </h1>
        <p style={width >= TABLET_WIDTH ? styles.p : { ...styles.p, fontSize: "18px" }}>
          Hey there! I'm Kenny, a Front End Developer with a passion for
          creating beautiful digital applications.
        </p>
        <button className="cta-button" style={styles.ctaButton}>
          {" "}
          Connect with me{" "}
        </button>
        <div style={styles.more}>
          <img src={Star} alt="Star" style={styles.star} />
          <p style={styles.moreText}>Scroll for more</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  more: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  star: {
    marginTop: "48px",
    zIndex: 1,
  },
  ctaButton: {
    backgroundColor: "var(--on-background)",
    color: "var(--background)",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "16px 32px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    zIndex: 1,
  },
  secondaryButton: {
    backgroundColor: "var(--container-primary)",
    color: "var(--on-container-primary)",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "16px 32px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    marginLeft: "16px",
  },
  p: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "22px",
    maxWidth: "600px",
    color: "var(--text-primary)",
    paddingBottom: "48px",
    zIndex: 1,
  },
  moreText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "16px",
    color: "var(--text-primary)",
  },
  h1: {
    fontWeight: 500,
    letterSpacing: "-4px",
    maxWidth: "900px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    paddingBottom: "32px",
    zIndex: 1,
  },
  h2: {
    fontWeight: 600,
    maxWidth: "900px",
    fontSize: "52px",
    lineHeight: "60px",
    color: "var(--text-primary)",
    paddingBottom: "24px",
    margin: 0,
    zIndex: 1,
  },
  homeLowerSection: {
    height: "900px",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
  },
};

export default Home;
