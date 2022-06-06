import './Home.css';
import styled from "styled-components";
import { FormControl, Grid, InputBase } from "@mui/material"

function Home() {
  const CtaButton = styled.button`
  background-color: var(--container-tertiary);
  color: var(--on-container-tertiary);
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  padding: 12.5px 26px;
  border-radius: 16px;
  border-width: 0px;
  position: absolute;
  margin-right: 16px;
  cursor: pointer;
`;
  return (
    <div className="Home">
      <header className="Home-header">
        <h class='h'>
          Software Developer with a passion for design
        </h>
        <p class='p1'>
          Hi there, I'm Kenny!. I specialize in implementing elegant and user-friendly digital experiences.
        </p>
        <div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <FormControl sx={{ width: '600px'}}>
            <InputBase placeholder="Enter your email" sx={{
              borderRadius: '32px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              outlineWidth: '0px',
              border: '0px',
              padding: '25px 181px 25px 32px',
              outline: 'none',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface)',
            }}> </InputBase>
          </FormControl>
          <CtaButton> Get in touch </CtaButton>
        </Grid>
        </div>

      </header>
    </div>
  );
}

export default Home;
