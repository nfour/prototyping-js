import * as React from 'react';

export interface IProps { text: string; }

export const StatelessComponent: React.SFC<IProps> = ({ text }) =>
  <div>
    <h2>{text}</h2>
  </div>;
