import "./Portfolio.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SearchForm, Button, SectionTitle } from "../../components";
import useWindowDimensions from "../../utils.js";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { width } from "@mui/system";
import GithubLogo from "../../assets/icons/github.svg";

function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Portfolio: React.FC = () => {
  const flightRef = React.createRef<HTMLInputElement>();
  const isFlightVisible = useIsVisible(flightRef);
  const [showFlight, setShowFlight] = useState(true);
  const weatherRef = React.createRef<HTMLInputElement>();
  const isWeatherVisible = useIsVisible(weatherRef);

  useEffect(() => {
    if (isFlightVisible) {
      setShowFlight(true);
    } else if (isWeatherVisible) {
      setShowFlight(false);
    }
  }, [isFlightVisible]);

  return (
    <div style={styles.portfolioContainer} className="portfolio-container">
      <div style={styles.container}>
        <SectionTitle title={"Some things I built"} />
        <div style={styles.rowContainer}>
          <AnimationOnScroll
            style={styles.phoneContainer}
            animateIn="animate__fadeInLeft"
          >
            <img
              className="phone"
              src={require("../../assets/flight_app.gif")}
              style={{
                ...styles.phone,
                ...{
                  opacity: isWeatherVisible ? "0" : "1",
                  transition: "opacity 0.5s ease-in-out",
                },
              }}
            />
            <div
              style={{
                ...styles.phoneContainer2,
                ...{
                  opacity: !isWeatherVisible ? "0" : "1",
                  transition: "opacity 0.5s ease-in-out",
                },
              }}
            >
              <img
                className="phone"
                src={require("../../assets/weather_app.png")}
                style={styles.phone}
              />
            </div>
          </AnimationOnScroll>
          <div style={{ gridColumn: "8 / span 5"}}>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate_fadeOut"
              style={{ ...styles.flightP }}
            >
              <div ref={flightRef}>
                <h3 style={styles.h3}>Personal Project</h3>
                <h2 style={styles.h2}>Flight Search App</h2>
              </div>
              <p style={styles.p}>
                A mobile app implemented using Expo and utilized FlightLabs REST
                API. Allows users to search for the best flights search with
                prices.
              </p>
              <div className="link-button" style={styles.iconContainer}>
                <img src={GithubLogo} style={styles.icon} />
              </div>
            </AnimationOnScroll>
            <div ref={weatherRef}>
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate_fadeOut"
                style={styles.flightP}
              >
                <div>
                  <h3 style={styles.h3}>Personal Project</h3>
                  <h2 style={styles.h2}>Weather App</h2>
                </div>
                <p style={styles.p}>
                  A Flutter mobile app using OpenWeather's Weather API . Shows
                  users the current temperature and weather information for the
                  day.
                </p>
                <div className="link-button" style={styles.iconContainer}>
                  <img src={GithubLogo} style={styles.icon} />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    width: "24px",
  },
  rowContainer: {
    display: "grid",
    maxWidth: "100%",
    gridTemplateColumns: "repeat(12, minmax(0px, 1fr))",
    gridAutoFlow: "row",
    height: "auto",
    gridAutoRows: "minmax(5px, auto)",
    gap: "3.2rem 0px",
    columnGap: "32px",
  },
  iconContainer: {
    width: "48px",
    height: "48px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    marginLeft: "auto",
    marginTop: "16px",
  },
  portfolioContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "240px",
  },
  phoneContainer: {
    gridColumn: "2 / span 5",
    top: "calc((100vh - 600px)/2)",
    position: "sticky",
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "start",
  },
  phoneContainer2: {
    width: "100%",
    top: 0,
    position: "absolute",
    display: "flex",
    alignItems: "flex-start",
  },
  container: {
    maxWidth: "1280px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    padding: "0 32px 192px 32px",
  },
  phone: {
    maxHeight: "600px",
    borderRadius: "32px",
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
    textAlign: "start",
    color: "var(--text-primary)",
    float: "right",
  },
  flightP: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
    marginLeft: "auto",
  },
  h1: {
    fontWeight: 500,
    letterSpacing: "-4px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    marginBottom: "192px",
  },
  h2: {
    fontWeight: 500,
    fontSize: "52px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: 0,
    marginBottom: "32px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "60px",
    color: "var(--text-primary)",
    textAlign: "start",
    margin: 0,
  },
  homeLowerSection: {
    height: "800px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};

export default Portfolio;
