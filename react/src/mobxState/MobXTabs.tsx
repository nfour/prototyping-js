
import { Tab, Tabs as MuiTabs } from '@material-ui/core';
import { observer } from 'mobx-react';
import * as React from 'react';

export interface IProps {
  ButtonContainer?: React.ComponentType;
  ContentContainer?: React.ComponentType;
  tabs: Array<{ label: string, Content: React.ComponentType }>;
  tabState: ITabState;
}

export interface ITabState {
  active: number;
  setActiveTab (index: number): any;
}

const DefaultButtonContainer: React.SFC = ({ children }) => <div>{children}</div>;
const DefaultContentContainer: React.SFC = ({ children }) => <div>{children}</div>;

export const MobXTabs: React.SFC<IProps> = ({
  ButtonContainer = DefaultButtonContainer,
  ContentContainer = DefaultContentContainer,
  tabState: { active, setActiveTab },
  tabs,
}) => {
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

/** The `observer` decorator means that whenever it detects a store change, this component shall re-render */
export const ControlledMobXTabs = observer(MobXTabs);
