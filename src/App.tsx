import React, { useEffect, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.scoped.css";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import purpleCircle from "./assets/purple_circle.png";
import pinkCirlce from "./assets/pink_circle.png";
import background from "./assets/Slide 16_9 - 1.png";
import Home from "./sections/Home/Home";
import Portfolio from "./sections/Portfolio/Portfolio";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TABLET_WIDTH } from "../../my-app/src/constants.js";
import { Routes, Route } from "react-router-dom";
import "animate.css/animate.min.css";

const { innerWidth: width } = window;

function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const App: React.FC = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const checkpoint = 550;
  const [navBarColor, setNavBarColor] = useState("");

  const [homeSqueeze, setHomeSqueeze] = useState(true);
  const [portfolioSqueeze, setPortfolioSqueeze] = useState(true);
  const [workSqueeze, setWorkSqueeze] = useState(true);
  const [aboutSqueeze, setAboutSqueeze] = useState(true);
  const portfolioRef = React.createRef<HTMLInputElement>();
  const isPortfolioVisible = useIsVisible(portfolioRef);
  const workRef = React.createRef<HTMLInputElement>();
  const isWorkVisible = useIsVisible(workRef);
  const aboutRef = React.createRef<HTMLInputElement>();
  const isAboutVisible = useIsVisible(aboutRef);
  const xRef = React.createRef<HTMLInputElement>();
  const isXVisible = useIsVisible(xRef);
  const homeContainerElement = document.querySelector<HTMLElement>(
    ".home-container"
  )!;
  const portfolioContainerElement = document.querySelector<HTMLElement>(
    ".portfolio-container"
  )!;

  const workContainerElement = document.querySelector<HTMLElement>(
    ".work-container"
  )!;
  const aboutContainerElement = document.querySelector<HTMLElement>(
    ".about-container"
  )!;

  useEffect(() => {
    if (isWorkVisible && homeSqueeze) {
      homeContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.75s ease-in-out forwards"
          : "container-shadow 1 0.75s ease-in-out forwards";
      setHomeSqueeze(false);
    } else if (!isWorkVisible && !homeSqueeze) {
      homeContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.75s ease-in-out forwards"
          : "container-unshadow 1 0.75s ease-in-out forwards";
      setHomeSqueeze(true);
    }
  }, [isWorkVisible]);

  useEffect(() => {
    if (isPortfolioVisible && workSqueeze) {
      workContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.75s ease-in-out forwards"
          : "container-shadow 1 0.75s ease-in-out forwards";
      setWorkSqueeze(false);
    } else if (!isPortfolioVisible && !workSqueeze) {
      workContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.75s ease-in-out forwards"
          : "container-unshadow 1 0.75s ease-in-out forwards";
      setWorkSqueeze(true);
    }
  }, [isPortfolioVisible]);

  useEffect(() => {
    if (isAboutVisible && portfolioSqueeze) {
      portfolioContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.75s ease-in-out forwards"
          : "container-shadow 1 0.75s ease-in-out forwards";
      setPortfolioSqueeze(false);
    } else if (!isAboutVisible && !portfolioSqueeze) {
      portfolioContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.75s ease-in-out forwards"
          : "container-unshadow 1 0.75s ease-in-out forwards";
      setPortfolioSqueeze(true);
    }
  }, [isAboutVisible]);

  useEffect(() => {
    if (isXVisible && aboutSqueeze) {
      aboutContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.75s ease-in-out forwards"
          : "container-shadow 1 0.75s ease-in-out forwards";
      setAboutSqueeze(false);
    } else if (!isXVisible && !aboutSqueeze) {
      aboutContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.75s ease-in-out forwards"
          : "container-unshadow 1 0.75s ease-in-out forwards";
          setAboutSqueeze(true);
    }
  }, [isXVisible]);

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      var opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    if (currentScroll >= 50) {
      setNavBarColor("var(--background)");
    } else {
      setNavBarColor("");
    }
    const homeElement = document.querySelector<HTMLElement>(".Home")!;
    // @ts-ignore: Object is possibly 'null'.
    homeElement.style.opacity = opacity;
    // @ts-ignore: Object is possibly 'null'.
  });
  return (
    <div className="app">
      <NavigationBar backgroundColor={navBarColor} />
      <div id="section-home">
        <Home theme={"light"} />
      </div>
      <div ref={workRef} id="section-work">
        <Work />
      </div>
      <div ref={portfolioRef} id="section-projects">
        <Portfolio />
      </div>
      <div ref={aboutRef}  id="section-contact">
        <About />
      </div>
      <div ref={xRef}  id="section-contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
