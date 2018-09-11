
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ReactStateTabs } from './ReactStateTabs';

storiesOf('React State', module)
  .add('ReactStateTabs', () =>
    <ReactStateTabs
      tabs={[
        { label: 'Foo', Content: () => <span>Foo</span> },
        { label: 'Bar', Content: () => <span>Bar</span> },
      ]}
    />,
  );
