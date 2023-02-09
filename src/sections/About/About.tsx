import React from "react";
import { SectionTitle } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { Grid } from "@mui/material";
import { ArrowRight } from "../../assets/icons/ArrowRight.js";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import js from "../../assets/javascript.png";
import ts from "../../assets/typescript.png";
import python from "../../assets/python.png";
import htmlcss from "../../assets/htmlcss.png";
import pycharm from "../../assets/pycharm.png";
import react from "../../assets/react.png";
import swift from "../../assets/swift.png";
import xcode from "../../assets/xcode.png";
import vscode from "../../assets/vscode.png";
import npm from "../../assets/npm.png";
import node from "../../assets/node.png";
import yarn from "../../assets/yarn.png";
import expo from "../../assets/expo.png";

const About: React.FC = () => {
  const { height, width } = useWindowDimensions();

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
      className="about-container"
    >
      <div style={{ padding: "0 32px 0px 32px" }}>
        <SectionTitle title={"About me"} />
        <div style={styles.columnContainer}>
          <AnimationOnScroll
            style={styles.container}
            animateIn="animate__fadeIn"
            animateOnce
          >
            <div style={styles.descriptionContainer}>
              <div style={styles.description}>
                <h2 style={styles.h2}>Hey there!</h2>
                <p style={styles.p}>
                  My name is Kenny and I enjoy crafting digital experiences
                  through stunning design and front-end development. My interest
                  in software development started in 2016 after taking my first
                  computer science class.
                </p>
                <p style={styles.p}>
                  I have a Bachelor of Science degree in Cognitive Science with
                  minors in Psychology and Computer Science from the University
                  of Toronto
                </p>
                <p style={styles.p}>
                  Outside of work, I enjoy swimming, watching shows, listening
                  to music, and playing video games with my friends!
                </p>
              </div>
            </div>
            <div style={styles.photoContainer} />
          </AnimationOnScroll>
          <h1 style={styles.h1}>Technical skills</h1>
          <h2 style={styles.h2}>Languages</h2>
          <div style={styles.skillsContainer}>
            <LogoTitle src={js} title={"JavaScript"} styles={styles} />
            <LogoTitle src={ts} title={"TypeScript"} styles={styles} />
            <LogoTitle src={swift} title={"SwiftUI"} styles={styles} />
            <LogoTitle src={python} title={"Python"} styles={styles} />
            <LogoTitle src={htmlcss} title={"HTML & CSS"} styles={styles} />
          </div>
          <h2 style={styles.h2}>Libraries</h2>
          <div style={styles.skillsContainer}>
            <LogoTitle src={react} title={"React"} styles={styles} />
            <LogoTitle src={react} title={"React Native"} styles={styles} />
            <LogoTitle src={expo} title={"Expo"} styles={styles} />
          </div>
          <h2 style={styles.h2}>IDEs</h2>
          <div style={styles.skillsContainer}>
            <LogoTitle src={vscode} title={"VSCode"} styles={styles} />
            <LogoTitle src={xcode} title={"XCode"} styles={styles} />
            <LogoTitle src={pycharm} title={"PyCharm"} styles={styles} />
          </div>
          <h2 style={styles.h2}>Other tools</h2>
          <div style={styles.skillsContainer}>
            <LogoTitle src={npm} title={"Npm"} styles={styles} />
            <LogoTitle src={yarn} title={"Yarn"} styles={styles} />
            <LogoTitle src={node} title={"Node.js"} styles={styles} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  logoTitle: {
    maxWidth: "80px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "32px",
    marginRight: "64px",
    flex: "0 0 auto",
  },
  skills: {
    width: "100%",
    marginBottom: "16px",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "auto",
  },
  photoContainer: {
    minWidth: "100px",
    height: "600px",
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
    backgroundColor: "#F4EFF5",
    borderRadius: "56px",
  },
  descriptionContainer: {
    minWidth: "100px",
    height: "600px",
    flex: 1,
    flexGrow: 2,
    flexShrink: 0,
    flexBasis: 100,
    backgroundColor: "#F4EFF5",
    borderRadius: "56px",
    marginRight: "32px",
  },
  description: {
    margin: "64px",
  },
  list: {
    fontWeight: 400,
    fontSize: "16px",
    textAlign: "start",
    paddingInlineStart: "16px",
    maxWidth: "800px",
  },
  icon: {
    paddingLeft: "4px",
    justifyContent: "center",
    display: "flex",
  },
  rowContainer: {
    maxWidth: "100%",
    height: "auto",
    margin: "64px",
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
    maxWidth: "400px",
    margin: "64px auto 0px auto",
  },
  image: {
    maxWidth: "100%",
    minWidth: "0px",
  },
  container: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    display: "flex",
    marginBottom: "192px",
  },
  columnContainer: {
    maxWidth: "1216px",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: "start",
  },
  ctaButton: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "16px 32px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "64px auto 0px auto",
    backgroundColor: "#056835",
    color: "white",
  },
  p: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "start",
    color: "var(--text-primary)",
    marginBottom: "0px",
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
  },
  h1: {
    fontWeight: 600,
    fontSize: "72px",
    color: "var(--text-primary)",
    marginBottom: "80px",
  },
  h2: {
    fontWeight: 600,
    fontSize: "48px",
    color: "var(--text-primary)",
    textAlign: "start",
    marginTop: "0px",
    marginBottom: "32px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "12px",
    color: "var(--text-primary)",
    textAlign: "center",
    margin: 0,
  },
  h4: {
    fontWeight: 400,
    fontSize: "18px",
    color: "var(--text-primary)",
    textAlign: "center",
    marginTop: 0,
    marginBottom: "16px",
  },
};

export default About;
