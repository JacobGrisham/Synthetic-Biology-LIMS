import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Image} from '../assets/images/hero.svg';

const Hero = styled.header`
  grid-row: hero-start / hero-end;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  align-items: center;
`

const Title = styled.h3`
  grid-column: 1 / 1;
  font-size: calc(20px + 2vmin);
  padding: 0 4rem 0 4rem;
`;

const HeroImage = styled.div`
  grid-column: 2 / 2;
  padding: 0 4rem 0 4rem;
`

const Header = () => {
  return (
    <Hero>
      <Title>Synbio LIMase will catalyze your Laboratory Information Management for Synthetic Biology</Title>
      <HeroImage><Image /></HeroImage>
    </Hero>
  );
}

export default Header;