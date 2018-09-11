
import { storiesOf } from '@storybook/react';
import { observable } from 'mobx';
import * as React from 'react';
import { ControlledMobXTabs } from './MobXTabs';

const tabState = observable({
  active: 0,
  setActiveTab (active: number) {
    tabState.active = active;
  },
});

const stories = storiesOf('MobX State', module);

/**
 * This component is controlled by the MobX store, `tabState`.
 * Whenever `setActiveTab` is called, this component will re-render reactively
 */
stories.add('ControlledMobXTabs', () =>
  <ControlledMobXTabs
    tabs={[
      { label: 'Foo', Content: () => <span>Foo</span> },
      { label: 'Bar', Content: () => <span>Bar</span> },
    ]}
    tabState={tabState}
  />,
);
