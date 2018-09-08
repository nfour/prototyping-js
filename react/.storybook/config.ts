
import { configure } from '@storybook/react';

configure(async () => {
  await import('../statelessComponents');
}, module);
