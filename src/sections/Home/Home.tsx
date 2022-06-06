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
          Hi there, I'm Kenny! I specialize in implementing elegant and user-friendly digital experiences.
        </p>
        <div>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <SearchForm theme={theme}/>
            <button style={styles.ctaButton}> Get in touch </button>
          </Grid>
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
    position: 'absolute',
    marginRight: '16px',
    cursor: 'pointer',
  },
  inputBase: {
    borderRadius: '32px',
    fontFamily: 'Poppins',
    fontWeight: '500',
    outlineWidth: '0px',
    border: '0px',
    padding: '25px 181px 25px 32px',
    outline: 'none',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--surface)',
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
    maxWidth: '800px',
    fontSize: '72px',
    lineHeight: '80px',
    color: 'var(--text-primary)',
    paddingBottom: '20px',
    margin: 0,
  }

}

export default Home;
