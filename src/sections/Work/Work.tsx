import "./Work.css";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SearchForm, Button } from "../../components";
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

const Work: React.FC = () => {

  return (
    <div style={styles.portfolioContainer} className="portfolio-container">
      <div style={styles.container}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 style={styles.h1}>Work Experience</h1>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    width: "24px",
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    borderRadius: '50%',
    marginLeft: 'auto',
    marginTop: '16px'

  },
  portfolioContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "240px",
  },
  phoneContainer: {
    top: "calc((100vh - 600px)/2)",
    position: "sticky",
    display: "flex",
    alignItems: "flex-start",
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
  },
  phone: {
    maxHeight: "600px",
    borderRadius: "32px",
    marginLeft: "30px",
    marginBottom: "192px",
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
    marginRight: "30px",
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
    fontWeight: 600,
    fontSize: "52px",
    lineHeight: "60px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: 0,
    paddingBottom: "32px",
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

export default Work;
