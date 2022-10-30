import styled, { css } from "styled-components";
import logo from "assets/images/logo.png";
import { helpMail } from "data/links";
import Container from "components/common/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Contents>
          <S.Logo>
            <Link href="/">
              <img src={logo.src} alt="Itsuda" />
            </Link>
            <span>© 2022 Itsuda</span>
          </S.Logo>
          <S.Nav>
            <a href={helpMail}>문의하기</a>
          </S.Nav>
        </S.Contents>
      </Container>
    </S.Footer>
  );
}

const S = {
  Footer: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        justify-content: space-between;
        height: 100px;
        background-color: ${colors["dark_1"]};
        color: ${colors["lightgray_2"]};
        font-size: 14px;
        margin-bottom: 70px;
      `;
    }}
  `,
  Contents: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        border-top: 1px solid ${colors["gray_2"]};
      `;
    }}
  `,
  Logo: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    a {
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        opacity: 0.6;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  `,
  Nav: styled.nav`
    display: flex;
    align-items: center;
    padding-inline: 5px;
  `,
};
