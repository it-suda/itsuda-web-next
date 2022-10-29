import "styled-components";
import { colors } from "./theme";

type ColorsTypes = typeof colors;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}
