
import { configure } from '@storybook/react';

configure(() => {
  const req = require.context('../src', true, /\bstories\.tsx$/)

  req.keys().forEach((filename) => {
    console.log(filename)
    req(filename)
  })
}, module);
