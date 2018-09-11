
import { Tab, Tabs as MuiTabs } from '@material-ui/core';
import * as React from 'react';

export interface IProps {
  ButtonContainer: React.ComponentType;
  ContentContainer: React.ComponentType;
  tabs: Array<{ label: string, Content: React.ComponentType }>;
  active: number;
  setActiveTab (index: number): void;
}

export const MobXTabs: React.SFC<IProps> = ({ ButtonContainer, ContentContainer, tabs, active, setActiveTab }) => {
  const { Content } = tabs[active];

  return (
    <div>
      <ButtonContainer>
        <MuiTabs value={active} onChange={(event, value) => setActiveTab(value)}>
          {tabs.map(({ label }, index) =>
            <Tab value={index} label={label} key={index} />,
          )}
        </MuiTabs>
      </ButtonContainer>
      <ContentContainer>
        <Content />
      </ContentContainer>
    </div>
  );
};
