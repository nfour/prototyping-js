
import { Paper } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs } from './Tabs';

const ButtonContainer: React.SFC = ({ children }) => <div>{children}</div>;
const ContentContainer: React.SFC = ({ children }) => <div>{children}</div>;

storiesOf('React State', module)
  .add('Tabs', () =>
    <Tabs
      ButtonContainer={ButtonContainer}
      ContentContainer={ContentContainer}
      tabs={[
        { label: 'Foo', Content: () => <Paper>Foo</Paper> },
        { label: 'Bar', Content: () => <Paper>Bar</Paper> },
      ]}
    />,
  );
