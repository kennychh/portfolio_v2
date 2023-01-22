import "./Work.css";
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

const Work: React.FC = () => {
  return (
    <div style={styles.sectionContainer} className="work-container">
      <div style={styles.container}>
        <SectionTitle title={"Work experience"} />
        <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={styles.imageContainer}>
          <img
            src={require("../../assets/hellofresh_logo.png")}
            style={styles.image}
          />
        </div>
        <div style={styles.paragraph}>
        <h2 style={styles.h2}>HelloFresh</h2>
          <h3 style={styles.h3}>Junior Software Developer</h3>
          <h4 style={styles.h4}>May 2021 - August 2022</h4>
          <p style={styles.p}>
            <ul style={{paddingInlineStart: '20px', marginBlockStart: '0px'}}>
              <li>
                Built and maintained front end features for the React Native
                application. Developed new screens and components for this
                feature
              </li>
              <li>
                Worked with the design team to ensure that the website was
                visually appealing and user-friendly
              </li>
              <li>
                Provided tech support and solutions. Over the work term, various
                bugs were fixed for the app
              </li>
              <li>
                Released and maintained applications to both Google Play Store
                and Apple App Store
              </li>
              <li>
                Collaborated with the back-end development team to ensure
                seamless integration of the front-end and back-end systems
              </li>
            </ul>
          </p>
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
  iconContainer: {
    width: "48px",
    height: "48px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    marginTop: "16px",
  },
  sectionContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "240px",
    margin: "auto",
    minHeight: "100vh",
  },
  imageContainer: {
    width: "428px",
    height: "428px",
    backgroundColor: "#E4EFEB",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    marginLeft: "30px",
  },
  image: {
    maxWidth: "300px",
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
    paddingBottom: '192px'
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
    fontSize: "18px",
    textAlign: "start",
    color: "var(--text-primary)",
    float: "right",
  },
  paragraph: {
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
    marginBottom: '32px'
  },
  h3: {
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "60px",
    color: "var(--text-primary)",
    textAlign: "start",
    margin: 0,
  },
  h4: {
    fontWeight: 500,
    fontSize: "18px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: 0,
    marginBottom: '32px'
  },
  homeLowerSection: {
    height: "800px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};

export default Work;
