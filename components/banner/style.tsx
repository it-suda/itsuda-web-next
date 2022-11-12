import styled, { css } from "styled-components";

export default {
  Container: styled.div`
    ${({ theme }) => {
      const { media } = theme;
      return css`
        margin: 0 auto;
        padding-bottom: 30px;
        max-width: 1200px;

        ${media.lg} {
          padding: 40px;
        }

        ${media.xl} {
          padding: 50px 40px;
        }
      `;
    }}
  `,
  Banner: styled.div<{ image: string; bgColor: string }>`
    ${({ theme, image, bgColor }) => {
      const { media } = theme;
      return css`
        display: flex;
        width: 100%;
        height: 300px;
        background-size: auto 80%;
        border-radius: 0;
        margin: 0 auto;
        padding: 20px;
        background-repeat: no-repeat;
        background-position: right bottom;
        align-items: flex-start;
        background-size: 80%;
        background-image: url(${image});
        background-color: ${bgColor};

        ${media.sm} {
          height: 370px;
          padding: 30px 30px 30px 40px;
          background-size: 60%;
        }

        ${media.lg} {
          align-items: center;
          border-radius: 25px;
          padding: 50px 50px 50px 60px;
          background-repeat: no-repeat;
          background-position: right bottom;
          transition: background-color 0.3s;
          background-size: auto 60%;
        }

        ${media.xl} {
          background-size: auto 80%;
        }
      `;
    }}
  `,
  Contents: styled.div`
    ${({ theme }) => {
      const { media } = theme;
      return css`
        font-size: 20px;
        line-height: 1.8;
        font-weight: bold;

        ${media.sm} {
          font-size: 28px;
        }

        ${media.lg} {
          font-size: 40px;
        }

        p {
          display: flex;
          align-items: center;
          margin: 0;
        }
      `;
    }}
  `,
  Box: styled.span`
    ${({ theme }) => {
      const { media } = theme;
      return css`
        position: relative;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        min-width: 6em;
        height: 2em;
        margin-right: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        border: 3px solid white;
        overflow: hidden;

        ${media.sm} {
          border-width: 5px;
        }
      `;
    }}
  `,
  Name: styled.span<{ state: "current" | "prev" | "next" | "hidden" }>`
    ${({ state }) => {
      return css`
        position: absolute;
        display: block;
        transition: transform 0.3s;

        ${state === "prev" &&
        css`
          transform: translate3d(0, -100%, 0);
        `}

        ${state === "next" &&
        css`
          transform: translate3d(0, 100%, 0);
        `}
  
          ${state === "hidden" &&
        css`
          display: none;
        `}
      `;
    }}
  `,
};
