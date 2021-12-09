import React from 'react';
import styled from 'styled-components';
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

const LogoButton = styled.a `
  grid-column: 1 / 2;
`

const Buttons = styled.div `
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.a `
  background-color: rgb(33, 133, 208);
  width: 16rem;
  padding: 1.2rem 2rem;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 1.9rem;
  border-radius: 0.5rem;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <LogoButton href="/">
        <Logo />
      </LogoButton>
      <Buttons>
        <Button href="/register">Register</Button>
        <Button href="/signin">Log In</Button>
      </Buttons>
    </StyledNavBar>
  )
}

export default NavBar;