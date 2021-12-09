import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Lato-Regular';
    color: rgb(68, 90, 99);
  }

  p {
    margin: 0 0;
  }

  @font-face {
    font-family: Lato-Regular;
    src: url(../../assets/fonts/Lato-Regular.ttf) format('ttf');
    font-weight: 400;
    font-style: normal;
}
`

export default GlobalStyle;