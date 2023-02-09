import "./NavigationBar.css";
import React from "react";
import { FormControl, Grid } from "@mui/material";
import { maxWidth } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";
import useWindowDimensions from "../../utils.js";
import Resume from "../../assets/Resume.pdf";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";
import { Menu } from "../../assets/icons/Menu.js";
import { Link } from "react-router-dom";

type NavigationBarProps = {
  backgroundColor: string;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({
  backgroundColor = "",
}) => {
  const { height, width } = useWindowDimensions();
  const handleClickScroll = ({ section = "section-home" }) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={
        width >= PHONE_WIDTH
          ? styles.navigationBar(backgroundColor)
          : { ...styles.navigationBar(backgroundColor), height: "56px" }
      }
    >
      {width >= TABLET_WIDTH ? (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={styles.navigationBarItems}
        >
          <p
            onClick={() => handleClickScroll({ section: "section-home" })}
            style={styles.title}
          >
            Kenny Chan
          </p>
          <ul style={styles.sectionLinkContainer}>
            <li
              style={styles.sectionLink}
              onClick={() => handleClickScroll({ section: "section-work" })}
            >
              Work
            </li>
            <li
              style={styles.sectionLink}
              onClick={() => handleClickScroll({ section: "section-projects" })}
            >
              Projects
            </li>
            <li
              style={styles.sectionLink}
              onClick={() => handleClickScroll({ section: "section-about" })}
            >
              About
            </li>
            <li
              style={styles.sectionLink}
              onClick={() => handleClickScroll({ section: "section-contact" })}
            >
              Contact
            </li>
          </ul>
          <div style={styles.navItems}>
            <a
              style={styles.navLink}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <Link
              className="cta-button"
              style={styles.ctaButton}
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:hoiyat0210@gmail.com";
                e.preventDefault();
              }}
            >
              Let's chat
            </Link>
          </div>
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={styles.navigationBarItems}
        >
          <p
            onClick={() => handleClickScroll({ section: "section-home" })}
            style={
              width >= PHONE_WIDTH
                ? styles.title
                : { ...styles.title, margin: 0 }
            }
          >
            Kenny Chan
          </p>
          <Menu
            stroke={"black"}
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Grid>
      )}
    </div>
  );
};

const styles = {
  formControl: (width: string) => ({
    width: width,
  }),
  ctaButton: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "12px 24px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    margin: "0 0 0 1.2rem",
    textDecoration: "none",
    zIndex: 3,
  },
  navigationBar: (backgroundColor: string) => ({
    outlineWidth: "0px",
    border: "0px",
    outline: "none",
    width: "100%",
    height: "80px",
    display: "flex",
    overflowX: "clip",
    position: "sticky",
    top: "0",
    zIndex: 1,
    backgroundColor: backgroundColor,
    transition: " all 0.2s ease-in",
  }),
  navigationBarItems: {
    padding: "0px 32px 0px 32px",
    maxWidth: "1440px",
    width: "100%",
    margin: "0 auto",
  },
  sectionLinkContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    listStyleType: "none",
    zIndex: 2,
    paddingInlineStart: "0px",
  },
  sectionLink: {
    margin: "0 1.2rem",
    alignItems: "center",
    display: "flex",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  },
  navItems: {
    display: "flex",
    float: "left",
    alignItems: "center",
  },
  navLink: {
    listStyleType: "none",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0 1.2rem",
    zIndex: 3,
    color: "black",
    textDecoration: "none",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    cursor: "pointer",
    zIndex: 3,
  },
};
