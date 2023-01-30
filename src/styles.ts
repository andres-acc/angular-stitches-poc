import { createStitches } from '@stitches/core';

export const { css } = createStitches({
  theme: {
    colors: {
      primary: '#00A0FF',
      sky: '#E8F9FF',
      ghost: '#F8F8FF',
      grass: '#A5CD39',
      black: '#000'
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
