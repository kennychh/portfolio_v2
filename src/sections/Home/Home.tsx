import './Home.css';
import React from 'react';
import { Grid } from "@mui/material"
import { SearchForm, Button } from '../../components';
import coffeCup from '../../assets/coffee_cup.png';
import fire from '../../assets/fire.png';
import handshake from '../../assets/handshake.png';
import sakura from '../../assets/sakura.png';
import sunglasses from '../../assets/sunglasses.png';
import useWindowDimensions from '../../utils.js';

type HomeProps = {
  theme: string;
}
const Home: React.FC<HomeProps> = ({theme}) => {
  const { height, width } = useWindowDimensions();
  var navBarHeight = '-80px';
  return (
    <div className="Home" style={{marginTop: navBarHeight}}>
      <h1 style={
          styles.h1
        }>
          Building elegant & user-friendly digital experiences
        </h1>
        <p style={styles.p}>
          Hi there, I'm Kenny! I'm a software developer with a passion for design, & currently attending the University of Toronto.
        </p>
        <div>
        <button className="cta-button" style={styles.ctaButton}> Connect with me </button>
        </div>
        <img src={fire} className="home-image fire" />
        <img src={sunglasses} className="home-image sunglasses" />
        <img src={sakura} className="home-image sakura" />
        <img src={handshake} className="home-image handshake" />
    </div>
  );
}

const styles = {
  ctaButton: {
    backgroundColor: 'var(--container-tertiary)',
    color: 'var(--on-container-tertiary)',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Poppins',
    padding: '12.5px 26px',
    borderRadius: '16px',
    borderWidth: '0px',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'var(--container-primary)',
    color: 'var(--on-container-primary)',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Poppins',
    padding: '12.5px 26px',
    borderRadius: '16px',
    borderWidth: '0px',
    cursor: 'pointer',
    marginLeft: '16px'
  },
  p: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '18px',
    maxWidth: '560px',
    color: 'var(--text-primary)',
    paddingBottom: '20px'
  },
  h1:           {
    fontWeight: 600,
    letterSpacing: '-4px',
    maxWidth: '900px',
    fontSize: '72px',
    lineHeight: '80px',
    color: 'var(--text-primary)',
    paddingBottom: '20px',
    margin: 0,
  }

}

export default Home;
