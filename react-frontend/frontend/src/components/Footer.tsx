import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  grid-row: footer-start / footer-end;
  display: grid;
  justify-content: center;
  text-align: center;
  background-color: rgb(69, 90, 100);
  color: white;
`

const Author = styled.a`
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

const Footer = () => {

  var date = new Date();
  var year = date.getFullYear();

  return (
    <FooterStyle>
      <p>Made with ❤️ in SF</p>
      <p>Copyright &copy; <time>{year}</time> by <Author href='https://www.jacobgrisham.com/' aria-label="link to my portfolio" target="_blank" rel="noopener noreferrer">Jacob Grisham</Author></p>
    </FooterStyle>
  );
}

export default Footer;