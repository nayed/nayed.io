import { createGlobalStyle } from 'styled-components'

import CabinSketchRegular from '../fonts/CabinSketch-Regular.ttf'
import CabinSketchBold from '../fonts/CabinSketch-Bold.ttf'
import Neucha from '../fonts/Neucha.ttf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Cabin Sketch";
    font-style: normal;
    font-weight: normal;
    src: local("Cabin Sketch"), local("Cabin-Sketch"),
    url(${CabinSketchRegular}) format("truetype");
  }

  @font-face {
    font-family: "Cabin Sketch";
    font-style: bold;
    font-weight: bold;
    src: local("Cabin Sketch"), local("Cabin-Sketch"),
    url(${CabinSketchBold}) format("truetype");
  }

  @font-face {
    font-family: "Neucha";
    font-style: normal;
    font-weight: normal;
    src: local("Neucha"), url(${Neucha}) format("truetype");
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  html,
  #___gatsby {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body,h1,h2,h3,h4,h5,h6,ol,p,ul {
    margin: 0;
    padding: 0;
    font-weight: 400;
    line-height: 1.5;

  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1, .h1 {
    font-size: 2.5rem;
  }

  h2, .h2 {
    font-size: 2rem;
  }

  h3, .h3 {
    font-size: 1.75rem;
  }

  h4, .h4 {
    font-size: 1.5rem;
  }

  h5, .h5 {
    font-size: 1.25rem;
  }

  h6, .h6 {
    font-size: 1rem;
  }

  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  body {
    font-size: 16px;
    color: #191970;
    font-family: Cabin Sketch;
  }

  hr {
    -webkit-box-sizing: content-box;
            box-sizing: content-box;
    height: 0;
    overflow: visible;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`

export default GlobalStyles
