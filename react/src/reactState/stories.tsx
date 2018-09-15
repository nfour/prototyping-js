
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs } from './Tabs';

const tabs = [
  { label: 'Foo', Content: () => <span>Foo</span> },
  { label: 'Bar', Content: () => <span>Bar</span> },
];
storiesOf('React State', module)
  .add('Tabs', () =>
    <Tabs tabs={tabs} />,
  )
  .add('Tabs ("Bar")', () =>
    <Tabs
      tabs={tabs}
      active={1}
    />,
  );
