import * as React from 'react';

export interface IProps { text: string; }

export const StatelessComponent: React.SFC<IProps> = ({ text }) =>
  <div>
    {text}
  </div>;

export const StatelessComponentStyle2: React.SFC<IProps> = ({ text }) => {
  const content = <div>Wew</div>;

  return content;
};
