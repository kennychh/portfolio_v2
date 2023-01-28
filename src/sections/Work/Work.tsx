import "./Work.css";
import React from "react";
import { SectionTitle } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { ArrowRight } from "../../assets/icons/ArrowRight.js";

const Work: React.FC = () => {
  return (
    <div style={styles.sectionContainer} className="work-container">
      <div style={styles.container}>
        <SectionTitle title={"Work experience"} />
        <AnimationOnScroll
          style={styles.rowContainer}
          animateIn="animate__fadeIn"
        >
          <div style={styles.imageContainer}>
            <img
              src={require("../../assets/hellofresh_logo.png")}
              style={styles.image}
            />
          </div>
          <div style={{ gridColumn: "8 / span 5" }}>
            <div style={styles.paragraph}>
              <h2 style={styles.h2}>HelloFresh</h2>
              <h3 style={styles.h3}>Junior Software Developer</h3>
              <h4 style={styles.h4}>May 2021 - August 2022</h4>
              <p style={styles.p}>
                <ul
                  style={{
                    paddingInlineStart: "20px",
                    marginBlockStart: "0px",
                  }}
                >
                  <li>
                    Built and maintained front end features for the React Native
                    application such as screens and components
                  </li>
                  <li>
                    Worked with the design team to ensure user-friendliness and
                    visual appeal of mobile application
                  </li>
                  <li>Provided unit and integration tests to components</li>
                  <li>
                    Released and maintained applications to both Google Play
                    Store and Apple App Store
                  </li>
                  <li>
                    Collaborated with the back-end development team to ensure
                    seamless integration of the front-end and back-end systems
                  </li>
                </ul>
              </p>
            </div>
            <div style={styles.ctaButton} className={"link-button"}>
              Read more
              <ArrowRight style={styles.icon} />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    paddingLeft: "4px",
    justifyContent: "center",
    display: "flex",
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
    gridRowEnd: "span 1",
    gridColumnEnd: "span 5",
    aspectRatio: "1/1",
    backgroundColor: "#E4EFEB",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    minWidth: "300px",
  },
  image: {
    maxWidth: "100%",
    minWidth: "0px",
    margin: "0 20%",
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
  ctaButton: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "16px 32px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    float: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
  },
  p: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "18px",
    textAlign: "start",
    color: "var(--text-primary)",
    float: "right",
    marginBottom: "0px",
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
    marginLeft: "auto",
  },
  h2: {
    fontWeight: 500,
    fontSize: "52px",
    letterSpacing: "-2px",
    lineHeight: "60px",
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
  h4: {
    fontWeight: 500,
    fontSize: "18px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: 0,
    marginBottom: "32px",
  },
};

export default Work;
