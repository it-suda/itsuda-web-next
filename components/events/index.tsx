import { useEffect, useState } from "react";
import Cards from "components/events/cards";
import Container from "components/common/Container";
import styled from "styled-components";
import { Event } from "./types";
import eventsTestData from "data/events";

export default function Events() {
  const [events, setEvents] = useState<Event[]>(eventsTestData);
  return (
    <S.Event>
      <Container>
        <Cards events={events} />
      </Container>
    </S.Event>
  );
}

const S = {
  Event: styled.div`
    padding-bottom: 100px;
  `,
};
