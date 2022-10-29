import styled, { css } from "styled-components";

export default function Header() {
  return (
    <>
      <S.Container>Header</S.Container>
    </>
  );
}

const S = {
  Container: styled.div`
    ${({ theme }) => {
      return css`
        color: ${theme.colors.blue_1};
      `;
    }}
  `,
};
