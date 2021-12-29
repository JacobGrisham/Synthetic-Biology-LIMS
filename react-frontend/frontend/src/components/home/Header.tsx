import React from 'react';
// Styled Components
import styled from 'styled-components';
// React Router
import { Link } from "react-router-dom";
// My React Components
import ButtonPropped from '../ButtonPropped';
import {ReactComponent as HeroImage} from '../../assets/images/hero.svg';

const Hero = styled.header`
  grid-row: hero-start / hero-end;
  display: grid;
  grid-template-columns: [herotext-start] 50vw [herotext-end heroimage-start] 50vw [heroimage-end];
  align-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr [herotext-start] 40vh [herotext-end heroimage-start] 40vh [heroimage-end] 1fr;
    row-gap: 10rem
  }
`

const TitleBox = styled.div`
  grid-column: herotext-start / herotext-end;
  display: grid;
  align-self: start;
  margin-top: 25rem;
  padding-left: 9rem;

  @media only screen and (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: herotext-start / herotext-end;
    align-self: end;
    margin-top: 0rem;
    padding: 0rem 12rem 0rem 12rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0rem 8.4rem 0rem 8.4rem;
  }
`

const Title = styled.h1 `
  font-size: 3.2rem;
  font-weight: normal;
  margin-bottom: 4.2rem;
`

const StyledHeroImage = styled.div`
  grid-column: heroimage-start / heroimage-end;
  align-self: end;
  margin-bottom: 9rem;
  padding-right: 4rem;
  max-width: 800px;
  min-width: 560px;

  @media only screen and (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: heroimage-start / heroimage-end;
    align-self: center;
    margin-bottom: 3rem;
    padding-top: 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0rem 8.4rem 0rem 8.4rem;
  }
`

const Header: React.FC<{}> = () => {
  return (
    <Hero>
      <TitleBox>
        <Title>Synbio LIMase will catalyze your Laboratory Information Management for Synthetic Biology</Title>
        <Link to={'/register'}>
          <ButtonPropped xpadding={1.5} ypadding={2.5} width={15} primary text={'REGISTER'}/>
        </Link>
      </TitleBox>

      <StyledHeroImage><HeroImage /></StyledHeroImage>
    </Hero>
  );
}

export default Header;