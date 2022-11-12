import Container from "components/common/Container";
import styled from "styled-components";

export default function Events() {
  return (
    <S.Event>
      <Container>Events</Container>
    </S.Event>
  );
}

const S = {
  Event: styled.div`
    min-height: 100vh;
  `,
};
