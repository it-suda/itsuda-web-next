import styled, { css } from "styled-components";

interface ContainerProps {
  readonly isAlignCenter?: boolean;
}

export default styled.div<ContainerProps>`
  ${({ theme, isAlignCenter }) => {
    const { media } = theme;
    return css`
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding-inline: 20px;

      ${isAlignCenter &&
      css`
        text-align: center;
      `}

      ${media.sm} {
        padding-inline: 30px;
      }

      ${media.md} {
        padding-inline: 40px;
      }

      ${media.xl} {
        width: 100%;
      }
    `;
  }}
`;
