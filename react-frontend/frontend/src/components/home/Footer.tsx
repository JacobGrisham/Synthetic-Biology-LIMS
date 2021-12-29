import React, { Fragment } from 'react';
import styled from 'styled-components';
import {ReactComponent as FooterBackground} from '../../assets/images/footer-background.svg';

const FooterDecoration = styled.div `
  grid-row: footer-decoration-start / footer-decoration-end;
  transform: translateY(20px);
`

const StyledFooter = styled.footer `
  grid-row: footer-start / footer-end;
  display: grid;
  gap: 1rem;
  padding: 3rem 0;
  justify-content: center;
  text-align: center;
  background-color: rgb(69, 90, 100);
  font-size: 1.2rem;
  color: white;
`

const Heart = styled.svg `
  width: 16px;
  height: 20px;
  overflow: hidden;
  vertical-align: text-bottom;
  margin: 0 0.3rem;
`

const Author = styled.a `
  color: rgb(210, 233, 252);

  &:link,
  &:visited {
    text-decoration: none;
  }
  &:hover,
  &:focus,
  &:active {
    color: rgb(33, 133, 208);
  }
`

const Footer: React.FC<{}> = () => {

  var date = new Date();
  var year = date.getFullYear();

  return (
    <Fragment>
      <FooterDecoration><FooterBackground /></FooterDecoration>
      <StyledFooter>
        <p>Made with
          <Heart aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0000" d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
          </Heart>
        in SF
        </p>
        <p>Copyright &copy; <time>{year}</time> by <Author href='https://www.jacobgrisham.com/' aria-label="link to my portfolio" target="_blank" rel="noopener noreferrer">Jacob Grisham</Author></p>
      </StyledFooter>
    </Fragment>
  );
}

export default Footer;