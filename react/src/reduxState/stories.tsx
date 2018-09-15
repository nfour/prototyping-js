
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ControlledTabs } from './Tabs';

/**
 * This component is controlled by the MobX store, `tabState`.
 * Whenever `setActiveTab` is called, this component will re-render reactively
 */
storiesOf('Redux State', module)
  .add('Tabs', () =>
    <ControlledTabs
      tabs={[
        { label: 'Foo', Content: () => <span>Foo</span> },
        { label: 'Bar', Content: () => <span>Bar</span> },
      ]}
      tabState={tabState}
    />,
  );
