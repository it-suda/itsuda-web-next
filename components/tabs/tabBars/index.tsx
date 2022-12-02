import styled, { css } from "styled-components";

interface TabBarsProps {
  tabs: any;
  handleTabClick: (key: string) => void;
  selectedTab: string;
}

export default function TabBars({
  tabs,
  handleTabClick,
  selectedTab,
}: TabBarsProps) {
  const getIsSelected = (key: string) => {
    return key === selectedTab;
  };

  return (
    <S.TabList>
      {Object.keys(tabs).map((tabKey) => (
        <S.TabItem
          key={tabKey}
          isSelected={getIsSelected(tabKey)}
          onClick={() => handleTabClick(tabKey)}
        >
          {tabs[tabKey as keyof typeof tabs]}
        </S.TabItem>
      ))}
    </S.TabList>
  );
}

const S = {
  TabList: styled.ul`
    display: flex;
    gap: 5px;
  `,
  TabItem: styled.li<{ isSelected: boolean }>`
    ${({ theme, isSelected }) => {
      const { colors } = theme;
      return css`
        border-bottom: 3px solid;
        font-size: 16px;
        border-color: transparent;
        padding: 0 5px 10px;
        color: ${colors["lightgray_2"]};
        cursor: pointer;
        transition: border-color 0.1s;

        &:hover {
          color: ${colors["white"]};
        }

        ${isSelected &&
        css`
          border-color: ${colors["blue_1"]};
          color: ${colors["white"]};
        `}
      `;
    }}
  `,
};
