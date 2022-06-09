import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.scoped.css';
import {NavigationBar}  from './components/NavigationBar/NavigationBar';
import purpleCircle from './assets/purple_circle.png';
import pinkCirlce from './assets/pink_circle.png';
import background from './assets/Slide 16_9 - 1.png';
import Home from './sections/Home/Home';


const App: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <img src={background} className="cirlce-image"></img>
      <NavigationBar/>
      <Home theme={theme}/>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default App;