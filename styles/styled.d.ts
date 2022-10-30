import "styled-components";
import { theme } from "./theme";

type ColorsTypes = typeof theme.colors;

declare module "styled-components" {
  export interface DefaultTheme {
    media: {
      readonly xs: string;
      readonly sm: string;
      readonly md: string;
      readonly lg: string;
      readonly xl: string;
    };
    colors: {
      readonly white: string;
      readonly black: string;
      readonly lightgray_1: string;
      readonly lightgray_2: string;
      readonly gray_1: string;
      readonly gray_2: string;
      readonly gray_3: string;
      readonly dark_1: string;
      readonly dark_2: string;
      readonly red_1: string;
      readonly blue_1: string;
    };
  }
}
