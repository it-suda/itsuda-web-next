import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      body {
        font-family: Arial, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        min-width: 280px;
        min-height: 100vh;
        background-color: ${colors["dark_1"]};
        color: ${colors["white"]};
      }
      * {
        box-sizing: border-box;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }}
`;
