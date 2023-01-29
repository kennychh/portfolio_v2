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
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

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
  const { innerWidth: width, innerHeight: height } = window;
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
  const portfolioRef = React.createRef<HTMLInputElement>();
  const isPortfolioVisible = useIsVisible(portfolioRef);
  const workRef = React.createRef<HTMLInputElement>();
  const isWorkVisible = useIsVisible(workRef);
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

  console.log(width);
  useEffect(() => {
    if (isWorkVisible && homeSqueeze) {
      homeContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.5s ease-in-out forwards"
          : "container-shadow 1 0.5s ease-in-out forwards";
      setHomeSqueeze(false);
    } else if (!isWorkVisible && !homeSqueeze) {
      homeContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.5s ease-in-out forwards"
          : "container-unshadow 1 0.5s ease-in-out forwards";
      setHomeSqueeze(true);
    }
  }, [isWorkVisible]);

  useEffect(() => {
    if (isPortfolioVisible && workSqueeze) {
      workContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.5s ease-in-out forwards"
          : "container-shadow 1 0.5s ease-in-out forwards";
      setWorkSqueeze(false);
    } else if (!isPortfolioVisible && !workSqueeze) {
      workContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.5s ease-in-out forwards"
          : "container-unshadow 1 0.5s ease-in-out forwards";
      setWorkSqueeze(true);
    }
  }, [isPortfolioVisible]);

  useEffect(() => {
    if (isXVisible && portfolioSqueeze) {
      portfolioContainerElement.style.animation =
        width >= 1360
          ? "container-squeeze 1 0.5s ease-in-out forwards"
          : "container-shadow 1 0.5s ease-in-out forwards";
      setPortfolioSqueeze(false);
    } else if (!isXVisible && !portfolioSqueeze) {
      portfolioContainerElement.style.animation =
        width >= 1360
          ? "container-unsqueeze 1 0.5s ease-in-out forwards"
          : "container-unshadow 1 0.5s ease-in-out forwards";
      setPortfolioSqueeze(true);
    }
  }, [isXVisible]);

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      var opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    if (currentScroll >= 100) {
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
      <Home theme={"light"} />
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={xRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
