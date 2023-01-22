import React from 'react';
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

type SectionTitleProps = {
  title: string
}
export const SectionTitle: React.FC<SectionTitleProps> = ({title = "Some things I've built"}) => {

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 style={styles.h1}>{title}</h1>
        </AnimationOnScroll>
  );
}

const styles = {
  h1: {
    fontWeight: 500,
    letterSpacing: "-4px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    marginBottom: "192px",
  },
}