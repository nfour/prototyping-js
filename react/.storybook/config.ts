
import { configure } from '@storybook/react';

configure(async () => {
  await import('../src/stories');
}, module);
