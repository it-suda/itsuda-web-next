import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cards from "components/events/cards";
import Container from "components/common/Container";
import styled from "styled-components";
import { Event } from "types/eventTypes";
import eventsTestData from "data/events";
import DatePicker from "components/datePicker";
import Tabs from "components/tabs";
import { dutyCategories } from "constants/categories";
import { Duty } from "types/categoryTypes";

export default function Events() {
  // @ts-ignore
  const [events, setEvents] = useState<Event[]>(eventsTestData);
  const [duty, setDuty] = useState<Duty>("ALL");

  const router = useRouter();
  const queries = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    setCategory();
  }, [router]);

  const setCategory = () => {
    const { duty } = queries;
    if (typeof duty === "string") {
      // @ts-ignore
      setDuty(duty);
    }
  };

  const handleTabClick = (key: string) => {
    router.push({
      query: { duty: key },
    });
  };

  const selectItem = () => {};
  return (
    <S.Container>
      <DatePicker />
      <Tabs
        type="BAR"
        tabs={dutyCategories}
        selectedTab={duty}
        handleTabClick={handleTabClick}
      />
      <Cards events={events} />
    </S.Container>
  );
}

const S = {
  Container: styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding-bottom: 100px;
  `,
};
