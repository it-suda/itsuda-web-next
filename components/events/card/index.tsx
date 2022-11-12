import { Event } from "components/events/types";
import styled, { css } from "styled-components";
import banner1 from "assets/images/main_banner_1.png";

interface CardProps {
  event: Event;
}

export default function Card({ event }: CardProps) {
  return (
    <S.Container>
      <S.Image>
        <img src={event.thumbnail || banner1.src} alt={event.title} />
      </S.Image>
      <S.Contents>
        <S.TagList>
          <li>#{event.eventType}</li>
        </S.TagList>
        <h4>{event.title}</h4>
        <span>{event.host}</span>
        <span>{event.startDate}</span>
      </S.Contents>
    </S.Container>
  );
}

const S = {
  Container: styled.li`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: stretch;
        border-radius: 20px;
        height: 265px;
        overflow: hidden;
        background-color: ${colors["gray_3"]};
      `;
    }}
  `,
  Image: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        overflow: hidden;
        justify-content: center;
        background-color: ${colors["gray_4"]};
        height: 171px;
        img {
          object-fit: cover;
          width: 100%;
          min-height: 100%;
        }
      `;
    }}
  `,
  Contents: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        flex-direction: column;
        padding: 15px 20px;
        h4 {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 7px;
          font-weight: 700;
        }
        span {
          font-size: 13px;
          color: ${colors["lightgray_1"]};
          & + span {
            margin-top: 5px;
          }
        }
      `;
    }}
  `,
  TagList: styled.ul`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        margin-bottom: 7px;
        li {
          display: inline-flex;
          align-items: center;
          border: 1px solid ${colors["lightgray_2"]};
          padding: 2px 5px;
          border-radius: 15px;
          width: fit-content;
          font-size: 11px;
        }
      `;
    }}
  `,
};
