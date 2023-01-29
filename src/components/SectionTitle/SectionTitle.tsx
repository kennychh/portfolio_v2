import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH } from "../../constants.js";

type SectionTitleProps = {
  title: string;
};
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title = "Some things I've built",
}) => {
  const { width } = useWindowDimensions();
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <h1
        style={width >= TABLET_WIDTH ? styles.h1 : { ...styles.h1, fontSize: "64px", marginBottom: '160px' }}
      >
        {title}
      </h1>
    </AnimationOnScroll>
  );
};

const styles = {
  h1: {
    fontWeight: 500,
    letterSpacing: "-4px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    marginBottom: "192px",
  },
};
