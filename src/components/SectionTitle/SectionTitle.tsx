import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import useWindowDimensions from "../../utils.js";
import { TABLET_WIDTH, PHONE_WIDTH } from "../../constants.js";

type SectionTitleProps = {
  title: string;
  style: any;
};
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title = "Some things I've built",
  style = {},
}) => {
  const { width } = useWindowDimensions();
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" style={style}>
      <h1
        style={
          width >= TABLET_WIDTH
            ? styles.h1
            : width >= PHONE_WIDTH
            ? { ...styles.h1, fontSize: "56px", marginBottom: "160px" }
            : { ...styles.h1, fontSize: "48px", marginBottom: "160px" }
        }
      >
        {title}
      </h1>
    </AnimationOnScroll>
  );
};

const styles = {
  h1: {
    fontWeight: 500,
    letterSpacing: "-2px",
    fontSize: "72px",
    lineHeight: "80px",
    color: "var(--text-primary)",
    marginBottom: "192px",
  },
};
