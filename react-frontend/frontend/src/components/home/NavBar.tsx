import React from 'react';
// Styled Components
import styled from 'styled-components';
// React Router
import { Link } from "react-router-dom";
// My React Components
import ButtonPropped from '../ButtonPropped';
// Assets
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const StyledNavBar = styled.nav `
  margin: 2rem 3.2rem;
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100vw;
  display: grid;
  grid-template-columns: max-content 8fr 45rem 1fr;
`

const LogoButton = styled.div `
  grid-column: 1 / 2;
  width: 195px;
  height: 86px;
`

const Buttons = styled.div `
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const NavBar: React.FC<{}> = () => {
  return (
    <StyledNavBar>
      <Link to={'/'}>
        <LogoButton>
          <Logo />
        </LogoButton>
      </Link>

      <Buttons>
        <Link to={'/register'}>
          <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} primary text={'REGISTER'}/>
        </Link>
        <Link to={'/login'}>
          <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} primary text={'LOG IN'}/>
        </Link>
      </Buttons>

    </StyledNavBar>
  )
}

export default NavBar;