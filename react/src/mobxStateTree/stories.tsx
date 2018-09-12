
import { storiesOf } from '@storybook/react';
import { types } from 'mobx-state-tree';
import * as React from 'react';
import { ControlledTabs } from './Tabs';

const TabsStore = types
  .model('TabStore', {
    active: types.number,
  })
  .actions((self) => ({
    setActiveTab (active: number) { self.active = active; },
  }));

const tabState = TabsStore.create({ active: 0 });

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
