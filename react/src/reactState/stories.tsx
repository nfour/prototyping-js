
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ReactTabs } from './ReactTabs';

storiesOf('React State', module)
  .add('ReactTabs', () =>
    <ReactTabs
      tabs={[
        { label: 'Foo', Content: () => <span>Foo</span> },
        { label: 'Bar', Content: () => <span>Bar</span> },
      ]}
    />,
  );
