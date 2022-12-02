import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DatePicker() {
  return (
    <S.DatePicker>
      <S.ArrowButton>
        <FaChevronLeft />
      </S.ArrowButton>
      <S.SelectedDate>2022. 11</S.SelectedDate>
      <S.ArrowButton>
        <FaChevronRight />
      </S.ArrowButton>
    </S.DatePicker>
  );
}

const S = {
  DatePicker: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 3px;
        color: ${colors["white"]};
      `;
    }}
  `,
  ArrowButton: styled.button`
    display: inline-flex;
    align-items: center;
  `,
  SelectedDate: styled.span`
    font-size: 22px;
    font-weight: 700;
  `,
};
