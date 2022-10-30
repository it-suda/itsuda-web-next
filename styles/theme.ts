import { DefaultTheme } from "styled-components";

const mediaSizes = {
  sm: 380,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const theme: DefaultTheme = {
  media: {
    xs: `@media only screen and (max-width: ${mediaSizes.sm}px)`, // ~ 380
    sm: `@media only screen and (min-width: ${mediaSizes.sm}px)`, // 380 ~
    md: `@media only screen and (min-width: ${mediaSizes.md}px)`, // 768 ~
    lg: `@media only screen and (min-width: ${mediaSizes.lg}px)`, // 1024 ~
    xl: `@media only screen and (min-width: ${mediaSizes.xl}px)`, // 1280 ~
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
    lightgray_1: "#d7d7d7",
    lightgray_2: "#a0a0a0",
    gray_1: "#323232",
    gray_2: "#2d2d2d",
    gray_3: "#262626",
    dark_1: "#1c1a1a",
    dark_2: "#171515",
    red_1: "#ff3e00",
    blue_1: "#3178c6",
  },
};
