import "./Portfolio.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SearchForm, Button } from "../../components";
import useWindowDimensions from "../../utils.js";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { width } from "@mui/system";

const Portfolio: React.FC = () => {
  const { height, width } = useWindowDimensions();
  var navBarHeight = "-80px";
  const [squeeze, setSqueeze] = useState(true);

  return (
    <div style={styles.portfolioContainer} className="portfolio-container">
      <div style={styles.container}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 style={styles.h1}>Some things I've built</h1>
        </AnimationOnScroll>
        <div className="phone-container" style={styles.phoneContainer}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              src={require("../../assets/flight_app.gif")}
              style={styles.phone}
            />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate_fadeOut" style={styles.flightP}>
          <p style={styles.p}>
            Our smart tools make your max refund a sure thing. Easily find every
            deduction and optimize your return. Find a better refund and we’ll
            give you back what you paid to file (up to $50).
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate_fadeOut" style={styles.flightP}>
          <p style={styles.p}>
            Our smart tools make your max refund a sure thing. Easily find every
            deduction and optimize your return. Find a better refund and we’ll
            give you back what you paid to file (up to $50).
          </p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

const styles = {
  portfolioContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "240px",
  },
  phoneContainer: {
    width: "100%",
    margin: "0 auto",
  },
  container: {
    maxWidth: "1216px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  phone: {
    maxHeight: "600px",
    borderRadius: "32px",
    marginLeft: "30px",
    marginBottom: '192px'
  },
  ctaButton: {
    backgroundColor: "var(--on-background)",
    color: "var(--background)",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "12.5px 26px",
    borderRadius: "16px",
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
    padding: "12.5px 26px",
    borderRadius: "16px",
    borderWidth: "0px",
    cursor: "pointer",
    marginLeft: "16px",
  },
  p: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "22px",
    maxWidth: "560px",
    textAlign: "start",
    color: "var(--text-primary)",
    margin: "auto",
    float: "right",
  },
  flightP: {
    height: '100vh'
  },
  h1: {
    fontWeight: 500,
    letterSpacing: "-4px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    paddingBottom: "192px",
    margin: 0,
    zIndex: 0,
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
    height: "800px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};

export default Portfolio;
