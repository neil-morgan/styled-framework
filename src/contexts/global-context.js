import React, { createContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";

import Config from "../system/config";

import {
  NunitoLight,
  NunitoRegular,
  NunitoSemiBold,
  NunitoBold,
  NunitoItalic,
  RobotoLight,
  RobotoRegular,
  RobotoSemiBold,
  RobotoBold,
  RobotoItalic,
} from "../fonts";

const debug = Config().debug.active;
const gridBackground = Config().debug.gridBackground;
const gridPattern = Config().debug.gridPattern;
const wireframeFontColor = Config().debug.wireframeFontColor;
const wireframe = Config().debug.wireframe;

export const GlobalContext = createContext();

export default ({ children }) => {
  return (
    <GlobalContext.Provider>
      {debug && <Grid />}
      <ThemeProvider
        theme={{
          containers: Config().containers,
          breakpoints: Config().breakpoints,
          grid: Config().grid,
          fontSize: Config().fontSize,
          colors: Config().colors,
        }}
      >
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

const Grid = createGlobalStyle`
  body{
    background-size: 1rem 1rem !important;
    background-image: linear-gradient(to right, rgba(${gridPattern.red},${gridPattern.green},${gridPattern.blue},${gridPattern.brightness}) 0.1rem, transparent 0.1rem), linear-gradient(to bottom, rgba(${gridPattern.red},${gridPattern.green},${gridPattern.blue},${gridPattern.brightness}) 0.1rem, transparent 0.2rem) !important;
    background-color:${gridBackground};
  }
  *:not(body):not(path):not(g) {
      color: ${wireframeFontColor} !important;
      outline: solid 0.1rem rgba(${wireframe.red},${wireframe.green},${wireframe.blue},${wireframe.brightness}) !important;
      box-shadow: none !important; 
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Nunito";
    src: url(${NunitoLight}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Nunito";
    src: url(${NunitoRegular}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Nunito";
    src: url(${NunitoSemiBold}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Nunito";
    src: url(${NunitoBold}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Nunito";
    src: url(${NunitoItalic}) format("truetype");
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoSemiBold}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoItalic}) format("truetype");
    font-style: italic;
  }

  *,
  ::after,
  ::before {
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
    min-height: 0;
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    background: #000000;
  }

  button,
  textarea,
  input,
  select,
  label {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline:none;
  }

  nobr{
    white-space: nowrap;
  }
`;
