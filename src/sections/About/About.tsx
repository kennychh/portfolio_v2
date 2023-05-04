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
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import pycharm from "../../assets/pycharm.png";
import react from "../../assets/react.png";
import swift from "../../assets/swift.png";
import xcode from "../../assets/xcode.png";
import vscode from "../../assets/vscode.png";
import npm from "../../assets/npm.png";
import node from "../../assets/node.png";
import yarn from "../../assets/yarn.png";
import expo from "../../assets/expo.png";
import face from "../../assets/face.png";
import git from "../../assets/git.png";
import jira from "../../assets/jira.png";
import confluence from "../../assets/confluence.png";
import slack from "../../assets/slack.png";
import fun from "../../assets/fun.png";

const About: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const skillsTitle = ({ title = "Languages" }) => {
    return (
      <h2
        style={
          width >= TABLET_WIDTH
            ? styles.h2
            : width >= PHONE_WIDTH
            ? { ...styles.h2, fontSize: "42px" }
            : {
                ...styles.h2,
                fontSize: "36px",
              }
        }
      >
        {title}
      </h2>
    );
  };
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
          {width >= PHONE_WIDTH ? (
            <AnimationOnScroll
              style={styles.container}
              animateIn="animate__fadeIn"
              animateOnce
            >
              <div style={styles.descriptionContainer}>
                <div
                  style={
                    width >= TABLET_WIDTH
                      ? styles.description
                      : { margin: "32px" }
                  }
                >
                  <h2
                    style={
                      width >= TABLET_WIDTH
                        ? styles.h2
                        : { ...styles.h2, fontSize: "42px" }
                    }
                  >
                    Hey there!
                  </h2>
                  <p
                    style={
                      width >= TABLET_WIDTH
                        ? styles.p
                        : { ...styles.p, fontSize: "18px" }
                    }
                  >
                    I enjoy crafting digital experiences through stunning
                    design. My interest for software development started in
                    highschool after getting A's in my computer science classes
                    (and enjoying it too, of course)!
                  </p>
                  <p
                    style={
                      width >= TABLET_WIDTH
                        ? styles.p
                        : { ...styles.p, fontSize: "18px" }
                    }
                  >
                    I have a Bachelor of Science degree in Cognitive Science
                    (Computational Cognition Stream) with minors in Computer
                    Science and Psychology from the University of Toronto.
                  </p>
                </div>
              </div>
              <div style={styles.photoContainer}>
                <img src={face} style={styles.skills} />
              </div>
            </AnimationOnScroll>
          ) : (
            <AnimationOnScroll
              style={{
                ...styles.container,
                flexDirection: "column",
                marginBottom: "32px",
              }}
              animateIn="animate__fadeIn"
              animateOnce
            >
              <div style={styles.mobilePhotoContainer}>
                <img src={face} style={styles.skills} />
              </div>
              <div style={styles.mobileDescriptionContainer}>
                <div style={{ margin: "32px" }}>
                  <h2
                    style={{
                      ...styles.h2,
                      fontSize: "36px",
                      marginBottom: "16px",
                      textAlign: "start",
                    }}
                  >
                    Hey there!
                  </h2>
                  <p
                    style={
                      width >= TABLET_WIDTH
                        ? styles.p
                        : { ...styles.p, fontSize: "18px" }
                    }
                  >
                    I enjoy crafting digital experiences through stunning
                    design. My interest for software development started in
                    highschool after getting A's in my computer science classes
                    (and enjoying it too, of course)!
                  </p>
                  <p
                    style={
                      width >= TABLET_WIDTH
                        ? styles.p
                        : { ...styles.p, fontSize: "18px" }
                    }
                  >
                    I have a Bachelor of Science degree in Cognitive Science
                    (Computational Cognition Stream) with minors in Computer
                    Science and Psychology from the University of Toronto.
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          )}
          <div
            style={
              width >= TABLET_WIDTH
                ? styles.funContainer
                : {
                    ...styles.funContainer,
                    padding: "32px",
                    marginBottom: "160px",
                  }
            }
          >
            <h2
              style={
                width >= TABLET_WIDTH
                  ? styles.h2
                  : width >= PHONE_WIDTH
                  ? { ...styles.h2, fontSize: "42px", marginBottom: 0 }
                  : { ...styles.h2, fontSize: "36px", marginBottom: 0 }
              }
            >
              Sit back and relax
            </h2>
            <p
              style={
                width >= TABLET_WIDTH
                  ? { ...styles.p, textAlign: "center", maxWidth: "800px" }
                  : { ...styles.p, fontSize: "18px" }
              }
            >
              Outside of school, I enjoy swimming, drawing, watching shows,
              listening to music, and playing video games with my friends!
            </p>
            <div
              style={
                width >= TABLET_WIDTH
                  ? styles.funImageContainer
                  : {
                      ...styles.funImageContainer,
                      margin: "32px auto 0px auto",
                    }
              }
            >
              <img src={fun} style={styles.funImage} />
            </div>
          </div>
          <h1
            style={
              width >= TABLET_WIDTH
                ? styles.h1
                : width >= PHONE_WIDTH
                ? { ...styles.h1, fontSize: "56px" }
                : {
                    ...styles.h1,
                    fontSize: "48px",
                    marginBottom: "48px",
                  }
            }
          >
            Technical skills
          </h1>
          {skillsTitle({ title: "Languages" })}
          <div style={styles.skillsContainer}>
            <LogoTitle src={js} title={"JavaScript"} />
            <LogoTitle src={ts} title={"TypeScript"} />
            <LogoTitle src={swift} title={"SwiftUI"} />
            <LogoTitle src={python} title={"Python"} />
            <LogoTitle src={html} title={"HTML"} />
            <LogoTitle src={css} title={"CSS"} />
          </div>
          {skillsTitle({ title: "Libraries" })}
          <div style={styles.skillsContainer}>
            <LogoTitle src={react} title={"React"} />
            <LogoTitle src={react} title={"RN"} />
            <LogoTitle src={expo} title={"Expo"} />
          </div>
          {skillsTitle({ title: "IDEs" })}
          <div style={styles.skillsContainer}>
            <LogoTitle src={vscode} title={"VSCode"} />
            <LogoTitle src={xcode} title={"XCode"} />
            <LogoTitle src={pycharm} title={"PyCharm"} />
          </div>
          {skillsTitle({ title: "More tools" })}
          <div style={styles.skillsContainer}>
            <LogoTitle src={npm} title={"Npm"} />
            <LogoTitle src={yarn} title={"Yarn"} />
            <LogoTitle src={git} title={"Git"} />
            <LogoTitle src={jira} title={"Jira"} />
            <LogoTitle src={confluence} title={"Confluence"} />
            <LogoTitle src={slack} title={"Slack"} />
            <LogoTitle src={node} title={"Node.js"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  funImage: {
    width: "100%",
  },
  funImageContainer: {
    maxWidth: "600px",
    margin: "64px auto 0px auto",
  },
  funContainer: {
    maxWidth: "1216px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px",
    display: "flex",
    backgroundColor: "#F8EEF2",
    borderRadius: "56px",
    marginBottom: "192px",
  },
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
    height: "100%",
    objectFit: "cover",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "auto",
  },
  photoContainer: {
    minWidth: "100px",
    minHeight: "600px",
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
    backgroundColor: "#F4EFF5",
    borderRadius: "56px",
    aspectRatio: "1/1",
    overflow: "hidden",
  },
  mobilePhotoContainer: {
    borderRadius: "32px",
    width: "100%",
    aspectRatio: "1/1",
    marginBottom: "32px",
    overflow: "hidden",
  },
  mobileDescriptionContainer: {
    backgroundColor: "#F1F9FF",
    borderRadius: "32px",
  },
  descriptionContainer: {
    minWidth: "100px",
    minHeight: "600px",
    flex: 1,
    flexGrow: 2,
    flexShrink: 0,
    flexBasis: 100,
    backgroundColor: "#F1F9FF",
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
    marginBottom: "32px",
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
