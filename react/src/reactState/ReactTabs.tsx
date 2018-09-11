
import { Tab, Tabs as MuiTabs } from '@material-ui/core';
import * as React from 'react';

export interface IState {
  active?: number;
}

export interface IProps {
  ButtonContainer?: React.ComponentType;
  ContentContainer?: React.ComponentType;
  tabs: Array<{ label: string, Content: React.ComponentType }>;
}

const DefaultButtonContainer: React.SFC = ({ children }) => <div>{children}</div>;
const DefaultContentContainer: React.SFC = ({ children }) => <div>{children}</div>;

export class ReactTabs extends React.Component<IProps, IState> {
  state = { active: undefined };

  setTab (active: IState['active']) {
    this.setState({ active });
  }

  render () {
    const {
      ButtonContainer = DefaultButtonContainer,
      ContentContainer = DefaultContentContainer,
      tabs,
    } = this.props;

    const { active = 0 } = this.state;

    const { Content } = tabs[active];

    return (
      <div>
        <ButtonContainer>
          <MuiTabs value={active} onChange={(event, value) => this.setTab(value)}>
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
  }
}
