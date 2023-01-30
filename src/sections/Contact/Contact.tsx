import "./Contact.css";
import React from "react";
import { SectionTitle } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { ArrowRight } from "../../assets/icons/ArrowRight.js";
import GithubLogo from "../../assets/icons/github.svg";
import { InstagramLogo, LinkedinLogo } from "../../assets/icons";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH } from "../../constants.js";

const Contact: React.FC = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ padding: "0px 32px 0px 32px" }}>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
        style={
          width >= TABLET_WIDTH
            ? styles.sectionContainer
            : {
                ...styles.sectionContainer,
                paddingTop: "160px",
              }
        }
      >
        <h2
          style={
            width >= TABLET_WIDTH
              ? styles.h2
              : { ...styles.h2, fontSize: "48px" }
          }
        >
          Thanks for stopping by!
        </h2>
        <h4 style={styles.h4}>Feel free to reach out or say hello!</h4>
        <h4 style={{...styles.h4, marginTop: '16px'}}>hoiyat0210@gmail.com</h4>
        <div style={styles.socials}>
          <div className="link-button" style={styles.iconContainer}>
            <InstagramLogo style={styles.icon} />
          </div>
          <div className="link-button" style={styles.iconContainer}>
            <img src={GithubLogo} style={styles.icon} />
          </div>
          <div className="link-button" style={styles.iconContainer}>
            <LinkedinLogo style={styles.icon} />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

const styles = {
  socials: {
    marginTop: "64px",
  },
  icon: {
    width: "24px",
    padding: "12px",
    justifyContent: "center",
    display: "flex",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "50%",
    marginLeft: "auto",
    float: "left",
    marginRight: "16px",
    cursor: "pointer",
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
    margin: "0 auto 32px",
    minHeight: "350px",
    borderRadius: "56px",
    maxWidth: "1376px",
    width: "100%",
    paddingTop: "192px",
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
    fontWeight: 400,
    fontSize: "18px",
    color: "var(--text-primary)",
    textAlign: "start",
    margin: 0,
  },
};

export default Contact;
