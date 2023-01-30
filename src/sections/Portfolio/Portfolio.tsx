import "./Portfolio.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SearchForm, Button, SectionTitle } from "../../components";
import useWindowDimensions from "../../utils.js";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { width } from "@mui/system";
import GithubLogo from "../../assets/icons/github.svg";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";

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
  const weatherRef = React.createRef<HTMLInputElement>();
  const isWeatherVisible = useIsVisible(weatherRef);
  const { height, width } = useWindowDimensions();

  const paragraph = ({
    type = "Personal Project",
    name = "Flight Search App",
    description = "A mobile app implemented using Expo and utilized FlightLabs REST API. Allows users to search for the best flights search with prices.",
    ref = flightRef,
  }) => (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      animateOut="animate_fadeOut"
      animateOnce
      style={
        width >= PHONE_WIDTH
          ? { ...styles.flightP, height: "100vh" }
          : styles.flightP
      }
    >
      <div ref={ref}>
        <h3
          style={
            width >= TABLET_WIDTH
              ? styles.h3
              : width >= PHONE_WIDTH
              ? { ...styles.h3, fontSize: "18px" }
              : {
                  ...styles.h3,
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "64px",
                }
          }
        >
          {type}
        </h3>
        <h2
          style={
            width >= TABLET_WIDTH
              ? styles.h2
              : width >= PHONE_WIDTH
              ? { ...styles.h2, fontSize: "42px" }
              : {
                  ...styles.h2,
                  fontSize: "32px",
                  textAlign: "center",
                  marginBottom: "16px",
                }
          }
        >
          {name}
        </h2>
      </div>
      <p
        style={
          width >= TABLET_WIDTH
            ? styles.p
            : { ...styles.p, fontSize: "18px", textAlign: "center" }
        }
      >
        {description}
      </p>
      <div
        className="link-button"
        style={
          width >= PHONE_WIDTH
            ? { ...styles.iconContainer, marginLeft: "auto" }
            : { ...styles.iconContainer, marginLeft: "auto", marginRight: "auto" }
        }
      >
        <img src={GithubLogo} style={styles.icon} />
      </div>
    </AnimationOnScroll>
  );
  return (
    <div
      style={
        width >= TABLET_WIDTH
          ? styles.sectionContainer
          : {
              ...styles.sectionContainer,
              paddingBottom: "160px",
              paddingTop: "160px",
            }
      }
      className="portfolio-container"
    >
      <div style={styles.container}>
        <SectionTitle title={"Some things I built"} />
        {width >= PHONE_WIDTH ? (
          <div style={styles.rowContainer}>
            <AnimationOnScroll
              style={styles.phoneContainer}
              animateIn="animate__fadeInLeft"
              animateOnce
            >
              <div
                style={{
                  ...styles.phoneContainer2,
                  ...{
                    opacity: isFlightVisible ? "0" : "1",
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
              <img
                className="phone"
                src={require("../../assets/flight_app.gif")}
                style={{
                  ...styles.phone,
                  ...{
                    opacity: !isFlightVisible ? "0" : "1",
                    transition: "opacity 0.5s ease-in-out",
                  },
                }}
              />
            </AnimationOnScroll>
            <div style={{ gridColumn: "8 / span 5" }}>
              {paragraph({})}
              <div>
                {paragraph({
                  name: "Weather App",
                  description:
                    "A Flutter mobile app using OpenWeather's Weather API . Shows users the current temperature and weather information for the day.",
                  ref: weatherRef,
                })}
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.phoneWidthContainer}>
            <img
              className="phone"
              src={require("../../assets/flight_app.gif")}
              style={{
                ...styles.phone,
                ...{ maxHeight: "400px", borderRadius: "24px" },
              }}
            />
            {paragraph({})}
            <img
              className="phone"
              src={require("../../assets/weather_app.png")}
              style={{
                ...styles.phone,
                ...{
                  maxHeight: "400px",
                  borderRadius: "24px",
                  marginTop: "128px",
                },
              }}
            />
            {paragraph({
              name: "Weather App",
              description:
                "A Flutter mobile app using OpenWeather's Weather API . Shows users the current temperature and weather information for the day.",
              ref: weatherRef,
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  phoneWidthContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    width: "24px",
    padding: "12px",
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
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    marginTop: "16px",
    cursor: "pointer",
  },
  sectionContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "192px",
    paddingBottom: "192px",
    margin: "auto",
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
    maxWidth: "1216px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    padding: "0 32px 0px 32px",
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
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  },
  h1: {
    fontWeight: 500,
    letterSpacing: "-2px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    marginBottom: "192px",
  },
  h2: {
    fontWeight: 500,
    fontSize: "52px",
    letterSpacing: "-2px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: 0,
    marginBottom: "32px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "22px",
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
