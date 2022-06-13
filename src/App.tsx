import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.scoped.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import purpleCircle from './assets/purple_circle.png';
import pinkCirlce from './assets/pink_circle.png';
import background from './assets/Slide 16_9 - 1.png';
import Home from './sections/Home/Home';
import Portfolio from './sections/Portfolio/Portfolio';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const App: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const checkpoint = 550;
  const [navBarColor, setNavBarColor] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        var opacity = 1 - currentScroll / checkpoint;
      } else {
        opacity = 0;
      }
      if (currentScroll >= 100) {
        setNavBarColor('var(--background)')
      }
      else {
        setNavBarColor('')
      }
      const homeElement = document.querySelector<HTMLElement>('.Home')!;
      // @ts-ignore: Object is possibly 'null'.
      homeElement.style.opacity = opacity;
      // @ts-ignore: Object is possibly 'null'.
    });
  }, [])

  return (
    <div className="app" data-theme={theme}>
      <NavigationBar backgroundColor={navBarColor} />
      <Home theme={theme} />
      <Portfolio/>
    </div>
  );
}


export default App;