import "./NavigationBar.css";
import React from "react";
import { FormControl, Grid } from "@mui/material";
import { maxWidth } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";
import { Menu } from "../../assets/icons/Menu.js";

type NavigationBarProps = {
  backgroundColor: string;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({
  backgroundColor = "",
}) => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      style={
        width >= PHONE_WIDTH
          ? styles.navigationBar(backgroundColor)
          : { ...styles.navigationBar(backgroundColor), height: "56px" }
      }
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={styles.navigationBarItems}
      >
        <p
          style={
            width >= PHONE_WIDTH ? styles.title : { ...styles.title, margin: 0 }
          }
        >
          Kenny Chan
        </p>
        {width >= TABLET_WIDTH ? (
          <div>
            <ul style={styles.sectionLinkContainer}>
              <li style={styles.sectionLink}>Projects</li>
              <li style={styles.sectionLink}>Work</li>
              <li style={styles.sectionLink}>About</li>
              <li style={styles.sectionLink}>Contact</li>
            </ul>
            <div style={styles.navItems}>
              <li style={styles.navLink}>Resume</li>
              <button className="navbar-cta-button" style={styles.ctaButton}>
                {" "}
                Let's chat{" "}
              </button>
            </div>
          </div>
        ) : (
          <Menu
            stroke={"black"}
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          />
        )}
      </Grid>
    </div>
  );
};

const styles = {
  formControl: (width: string) => ({
    width: width,
  }),
  ctaButton: {
    backgroundColor: "var(--container-primary)",
    color: "var(--on-container-primary)",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Poppins",
    padding: "12px 24px",
    borderRadius: "32px",
    borderWidth: "0px",
    cursor: "pointer",
    margin: "0 0 0 1.2rem",
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
    zIndex: "100",
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
    padding: "0",
  },
  sectionLink: {
    margin: "0 1.2rem",
    alignItems: "center",
    display: "flex",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
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
  },
  title: {
    fontFamily: ' "Euclid", "Arial", sans-serif',
    fontSize: "22px",
    fontWeight: "600",
    padding: "0",
  },
};
