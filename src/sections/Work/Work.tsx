import "./Work.css";
import React from "react";
import { SectionTitle } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { ArrowRight } from "../../assets/icons/ArrowRight.js";

const Work: React.FC = () => {
  return (
    <div style={styles.sectionContainer} className="work-container">
              <SectionTitle title={"Work experience"} />
      <div style={{margin: '0px 32px 0px 32px'}}>
      <div style={styles.container}>
        <AnimationOnScroll
          style={styles.rowContainer}
          animateIn="animate__fadeIn"
        >
          <div style={{ gridColumnEnd: "span 6", gridRowEnd: "span 1",}}>
            <div style={styles.paragraph}>
              <h2 style={styles.h2}>HelloFresh</h2>
              <h3 style={styles.h3}>Junior Software Developer</h3>
              <h4 style={styles.h4}>(16 months) May 2021 - August 2022 </h4>
              <p style={styles.p}>
                <ul
                  style={{
                    paddingInlineStart: "20px",
                    marginBlockStart: "0px",
                  }}
                >
                  <li>
                    Built and maintained front-end features for React Native
                    application
                  </li>
                  <li>
                    Worked with the design team to ensure user-friendliness and
                    visual appeal of mobile application
                  </li>
                  <li>Provided unit and integration tests to components</li>
                  <li>
                    Collaborated with the back-end development team to ensure
                    seamless integration between systems
                  </li>
                </ul>
              </p>
            </div>
            <div style={styles.ctaButton} className={"cta-button"}>
              Read more
              <ArrowRight style={styles.icon} stroke={'white'}/>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img
              src={require("../../assets/hellofresh_logo.png")}
              style={styles.image}
            />
          </div>
        </AnimationOnScroll>
      </div>
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
    margin: '64px'
  },
  sectionContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "240px",
    margin: "auto",
    minHeight: "100vh",
    paddingBottom: '192px',
  },
  imageContainer: {
    gridColumn: "8 / span 5",
    aspectRatio: "1/1",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    display: "flex",
    minWidth: "300px",
    maxWidth: '400px'
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
    display: 'flex',
    backgroundColor: "#E4EFEB",
    borderRadius: '56px'
  },
  ctaButton: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "16px 32px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
    backgroundColor: '#056835',
    color: 'white'
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
    marginTop: 0,
    marginBottom: "16px",
  },
};

export default Work;
