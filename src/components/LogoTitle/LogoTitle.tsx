import React from "react";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";
import useWindowDimensions from "../../utils.js";

interface Props {
  src: any;
  title: string;
}

export const LogoTitle: React.FC<Props> = ({ src, title }) => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={
        width >= PHONE_WIDTH
          ? styles.logoTitle
          : { ...styles.logoTitle, maxWidth: "64px", marginRight: '32px' }
      }
    >
      <img src={src} style={styles.skills} />
      <h3 style={styles.h3}>{title}</h3>
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
    height: '100%',
    marginBottom: "16px",
    aspectRatio: '1/1',
    objectFit: 'contain'
  },
  h3: {
    fontWeight: 500,
    fontSize: "12px",
    color: "var(--text-primary)",
    textAlign: "center",
    margin: 0,
  },
};
