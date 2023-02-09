import React from "react";

interface Props {
  src: any;
  title: string;
  styles: any;
}

export const LogoTitle: React.FC<Props> = ({ src, title, styles }) => {
  return (
    <div style={styles.logoTitle}>
      <img src={src} style={styles.skills} />
      <h3 style={styles.h3}>{title}</h3>
    </div>
  );
};
