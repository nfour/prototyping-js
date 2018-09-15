
import { Tab, Tabs as MuiTabs } from '@material-ui/core';
import * as React from 'react';

export interface IState {
  active?: number;
}

export interface IProps {
  ButtonContainer?: React.ComponentType;
  ContentContainer?: React.ComponentType;
  tabs: Array<{ label: string, Content: React.ComponentType }>;
  active?: IState['active'];
}

const DefaultButtonContainer: React.SFC = ({ children }) => <div>{children}</div>;
const DefaultContentContainer: React.SFC = ({ children }) => <div>{children}</div>;

export class Tabs extends React.Component<IProps, IState> {
  state = { active: undefined };

  setActiveTab (active: IState['active']) {
    this.setState({ active });
  }

  render () {
    const {
      ButtonContainer = DefaultButtonContainer,
      ContentContainer = DefaultContentContainer,
      tabs, active: initialActive = 0,
    } = this.props;

    const { active = initialActive } = this.state;

    const { Content } = tabs[active];

    return (
      <div>
        <ButtonContainer>
          <MuiTabs value={active} onChange={(event, value) => this.setActiveTab(value)}>
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
