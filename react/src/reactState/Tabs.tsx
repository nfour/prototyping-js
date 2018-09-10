
import { Tab, Tabs as MuiTabs } from '@material-ui/core';
import * as React from 'react';

export class Tabs extends React.Component<{
  ButtonContainer: React.ComponentType;
  ContentContainer: React.ComponentType;
  tabs: Array<{ label: string, Content: React.ComponentType }>
}> {
  state = { active: undefined } as { active?: number };

  set (active: number) { this.setState({ active }); }

  render () {
    const { ButtonContainer, ContentContainer , tabs } = this.props;
    const { active = 0 } = this.state;

    const { Content } = tabs[active];

    return (
      <div>
        <ButtonContainer>
          <MuiTabs value={active} onChange={(event, value) => this.set(value)}>
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
