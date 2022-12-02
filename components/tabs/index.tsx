import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TabBars from "./tabBars";

type TabTypes = "BAR";

interface TabsProps {
  type: TabTypes;
  tabs: Object;
  selectedTab: string;
  handleTabClick: (key: string) => void;
}

export default function Tabs(props: TabsProps) {
  const [selectedTab, setSelectedTabs] = useState(props.selectedTab);
  const components = {
    BAR: TabBars,
  };
  const ActiveComponent = components[props.type];

  useEffect(() => {
    setSelectedTabs(props.selectedTab);
  }, [props.selectedTab]);

  return (
    <ActiveComponent
      tabs={props.tabs}
      handleTabClick={props.handleTabClick}
      selectedTab={selectedTab}
    />
  );
}
