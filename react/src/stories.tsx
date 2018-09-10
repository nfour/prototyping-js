
import { Paper } from '@material-ui/core';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs } from './reactState/Tabs';
import { StatelessComponent } from './statelessComponents/StatelessComponents';

/**
 * Just a simple component
 */
storiesOf('SFC', module)
  .add('StatelessComponent', () =>
    <StatelessComponent text='woo' />,
  );

/**
 * A simple component, but with a panel to change stuff, like the text
 */
storiesOf('SFC (Knobs)', module)
  .addDecorator(withKnobs)
  .add('StatelessComponent', () =>
    <StatelessComponent text={text('Text', 'woo')} />,
  );

const ButtonContainer: React.SFC = ({ children }) => <div>{children}</div>;
const ContentContainer: React.SFC = ({ children }) => <div>{children}</div>;

storiesOf('React State', module)
  .addDecorator(withKnobs)
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
