
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
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
