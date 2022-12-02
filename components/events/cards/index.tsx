import styled, { css } from "styled-components";
import Card from "components/events/card";
import { Event } from "types/eventTypes";

interface CardsProps {
  events: Event[];
}

export default function Cards({ events = [] }: CardsProps) {
  return (
    <S.Container>
      {events.map((item, index) => (
        <Card key={index} event={item} />
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.ul`
    ${({ theme }) => {
      const { media } = theme;
      return css`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        width: 100%;

        ${media.md} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        ${media.lg} {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        ${media.xl} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      `;
    }}
  `,
};
