
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TabStore } from './store';
import { ControlledTabs } from './Tabs';

const tabState = TabStore.create({ active: 0 });

const stories = storiesOf('MobX State Tree', module);

/**
 * This component is controlled by the MobX store, `tabState`.
 * Whenever `setActiveTab` is called, this component will re-render reactively
 */
stories.add('Tabs', () =>
  <ControlledTabs
    tabs={[
      { label: 'Foo', Content: () => <span>Foo</span> },
      { label: 'Bar', Content: () => <span>Bar</span> },
    ]}
    tabState={tabState}
  />,
);
