import './Home.css';
import React from 'react';
import { Grid } from "@mui/material"
import { SearchForm, Button } from '../../components/';

type HomeProps = {
  theme: string;
}
const Home: React.FC<HomeProps> = ({theme}) => {
  return (
    <div className="Home" style={{textAlign: 'center'}}>
      <header className="Home-header">
        <h1 style={
          styles.h1
        }>
          Software Developer with a passion for design
        </h1>
        <p style={styles.p}>
          Hi there, I'm Kenny! I'm a software developer with a passion for design, & currently attending the University of Toronto.
        </p>
        <div>
        <button className="cta-button" style={styles.ctaButton}> Connect with me </button>
        </div>

      </header>
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
