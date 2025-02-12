import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup (() => {
  return {
    themes: {
      dark: 'monokai',
      light: 'monokai',
    },
    langs: [
      'cpp', 'c', 'python', 'cmake', 'json', 'asm', 'bash', 
    ],
  };
});
