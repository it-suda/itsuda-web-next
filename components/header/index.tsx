import Container from "components/common/Container";
import styled, { css } from "styled-components";
import logo from "assets/images/logo.png";

export default function Header() {
  return (
    <S.Header>
      <Container>
        <S.Logo href="/">
          <img src={logo.src} alt="Itsuda" />
        </S.Logo>
      </Container>
    </S.Header>
  );
}

const S = {
  Header: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        height: 72px;
        background-color: ${colors["dark_1"]};
        border-bottom: 1px solid ${colors["gray_2"]};
        z-index: 1;
      `;
    }}
  `,
  Logo: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    width: 52px;
    height: 52px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
};
