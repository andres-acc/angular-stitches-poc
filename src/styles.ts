import { createStitches } from '@stitches/core';

export const { css } = createStitches({
  theme: {
    colors: {
      text: 'gray',
      primary: 'blue',
      onPrimary: 'white',
      backgroundColor: 'gray'
    },
    sizes: {
      4: '40px',
      10: '10px'
    },
    width: {
      10: '100px'
    },
    space: {
      10: '10px'
    }
  },
});
