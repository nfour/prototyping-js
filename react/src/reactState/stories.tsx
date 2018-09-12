
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs } from './Tabs';

storiesOf('React State', module)
  .add('ReactTabs', () =>
    <Tabs
      tabs={[
        { label: 'Foo', Content: () => <span>Foo</span> },
        { label: 'Bar', Content: () => <span>Bar</span> },
      ]}
    />,
  );
