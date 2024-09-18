"use client";

import { DefaultTheme } from "styled-components";
// import media from './media';
export type ColorsTypes = typeof colors;
export type DeviceTypes = typeof devices;
export type TypographyTypes = typeof typography;

const typography = {
  h1: {
    fontSize: "28px",
    lineHeight: "36px",
  },
  h2: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  h3: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  h4: {
    fontSize: "18px",
    lineHeight: "26px",
  },
  h5: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  h6: {
    fontSize: "14px",
    lineHeight: "22px",
  },
  h7: {
    fontSize: "12px",
    lineHeight: "18px",
  },
};

const colors = {
  // General
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
  blueColor: "#48609E",
  // Point

  // Font
  defaultFontColor: '#595959',
  grayFontColor: "#919191",
  deepGrayFontColor: "#6E6E6E",
  darkGrayFontColor: "#333333",
  lightGrayFontColor: "#B3B3B3",

  // Border
  grayBorderColor: "#D1D1D1",
  lightGrayBorderColor: "#E5E5E5",

  // Background
  ultraLightGrayBgColor: "#FDFDFD",
  deepNavyBlueBgColor: "#2F3644",
  footerBgColor: "#F9F9F9",
  whiteHoverColor: "#F0F0F0",
};

const deviceSizes = {
  mobile: 320,
  tablet: 767,
  desktop: 1080,
};
const devices = {
  mobile: `@media screen and (max-width: ${deviceSizes.tablet - 1}px)`,
  tablet: `@media screen and (min-width: ${deviceSizes.tablet}px) and (max-width: ${deviceSizes.desktop}px)`,
  desktop: `@media screen and (min-width: ${deviceSizes.desktop}px)`,
};

const theme: DefaultTheme = {
  colors,
  devices,
  typography,
};

export default theme;
