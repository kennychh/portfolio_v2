import "./Work.css";
import React from "react";
import { SectionTitle } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { ArrowRight } from "../../assets/icons/ArrowRight.js";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";

const Work: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const paragraph = (
    <div
      style={
        width >= TABLET_WIDTH
          ? styles.paragraph
          : { ...styles.paragraph, alignItems: "center" }
      }
    >
      <h2
        style={
          width >= TABLET_WIDTH
            ? styles.h2
            : width >= PHONE_WIDTH
            ? { ...styles.h2, fontSize: "42px" }
            : { ...styles.h2, fontSize: "42px", textAlign: "center", marginBottom: "16px" }
        }
      >
        HelloFresh
      </h2>
      <h3
        style={
          width >= PHONE_WIDTH ? styles.h3 : { ...styles.h3, fontSize: "18px" }
        }
      >
        Junior Software Developer
      </h3>
      <h4 style={styles.h4}>May 2021 - August 2022 </h4>
      <p
        style={
          width >= TABLET_WIDTH
            ? styles.p
            : { ...styles.p, fontSize: "18px", textAlign: "center" }
        }
      >
        Built and maintained front-end features for multi-brand application
        using React Native.
      </p>
    </div>
  );
  const logo = (
    <img
      src={require("../../assets/hellofresh_logo.png")}
      style={styles.image}
    />
  );
  const button = (
    <div
      style={
        width >= TABLET_WIDTH
          ? styles.ctaButton
          : { ...styles.ctaButton, margin: "32px auto 0px auto" }
      }
      className={"cta-button"}
    >
      Read more
      <ArrowRight style={styles.icon} stroke={"white"} />
    </div>
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
      className="work-container"
    >
      <div style={{ padding: "0 32px 0px 32px" }}>
        <SectionTitle title={"Work experience"} />
        {width >= TABLET_WIDTH ? (
          <div style={styles.container}>
            <AnimationOnScroll
              style={{
                ...styles.rowContainer,
                gridTemplateColumns: "repeat(12, minmax(0px, 1fr))",
                display: "grid",
                gridAutoFlow: "row",
                gridAutoRows: "minmax(5px, auto)",
                gap: "3.2rem 0px",
                columnGap: "32px",
              }}
              animateIn="animate__fadeIn"
            >
              <div style={{ gridColumnEnd: "span 6", gridRowEnd: "span 1" }}>
                {paragraph}
                {button}
              </div>
              <div
                style={{ ...styles.imageContainer, gridColumn: "8 / span 5" }}
              >
                {logo}
              </div>
            </AnimationOnScroll>
          </div>
        ) : (
          <div style={styles.container}>
            <AnimationOnScroll
              style={
                width >= PHONE_WIDTH
                  ? styles.rowContainer
                  : { ...styles.rowContainer, margin: "32px" }
              }
              animateIn="animate__fadeIn"
            >
              <div>
                <div
                  style={
                    width >= PHONE_WIDTH
                      ? { ...styles.imageContainer, aspectRatio: "1/1" }
                      : {
                          ...styles.imageContainer,
                          margin: "32px 32px 32px 32px",
                        }
                  }
                >
                  {logo}
                </div>
                {paragraph}
                {button}
              </div>
            </AnimationOnScroll>
          </div>
        )}
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
    margin: "auto",
    display: "flex",
    maxWidth: "400px",
  },
  image: {
    maxWidth: "100%",
    minWidth: "0px",
  },
  container: {
    maxWidth: "1216px",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    display: "flex",
    backgroundColor: "#E4EFEB",
    borderRadius: "56px",
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
    margin: "32px 0px 0px 0px",
    backgroundColor: "#056835",
    color: "white",
  },
  p: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "18px",
    textAlign: "start",
    color: "var(--text-primary)",
    float: "right",
    marginBottom: "0px",
    marginTop: "32px",
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
    marginTop: 0,
    marginBottom: "0px",
  },
};

export default Work;
