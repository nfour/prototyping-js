
import { storiesOf } from '@storybook/react';
import { observable } from 'mobx';
import * as React from 'react';
import { ControlledTabs } from './Tabs';

const tabState = observable({
  active: 0,
  setActiveTab (active: number) {
    tabState.active = active;
  },
});

/**
 * This component is controlled by the MobX store, `tabState`.
 * Whenever `setActiveTab` is called, this component will re-render reactively
 */
storiesOf('MobX State', module)
  .add('Tabs', () =>
    <ControlledTabs
      tabs={[
        { label: 'Foo', Content: () => <span>Foo</span> },
        { label: 'Bar', Content: () => <span>Bar</span> },
      ]}
      tabState={tabState}
    />,
  );
