import styled, { css } from 'styled-components';

const sizeSelector = (type: string): number => {
  if (type === 'largeTitle') return 1;
  if (type === 'titleOne') return 1;
  if (type === 'titleTwo') return 2;
  if (type === 'titlethree') return 3;
  if (type === 'headline') return 4;
  if (type === 'text') return 4;
  if (type === 'subhead') return 4;
  if (type === 'footer') return 5;
  if (type === 'caption') return 6;
  return 4;
};

const theme = {
  colors: {
    black: '#282A36',
    gray: '#44475A',
    white: '#F8F8F2',
    red: '#FF5555',
  },
  sizes: {
    largeTitle: '2.125rem',
    titleOne: '1.75rem',
    titleTwo: '1.375rem',
    titlethree: '1.25rem',
    headline: '1.063rem',
    text: '1.063rem',
    subhead: '0.938rem',
    footer: '0.813rem',
    caption: '0.75rem',
  },
};

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  type:
    | 'largeTitle'
    | 'titleOne'
    | 'titleTwo'
    | 'titlethree'
    | 'headline'
    | 'text'
    | 'subhead'
    | 'footer'
    | 'caption';
};

export const Text = styled('h1').attrs<HeadingProps>(({ type }) => ({
  as: `h${sizeSelector(type)}`,
}))<HeadingProps>`
  ${({ color = 'white', type = 'text' }) => css`
    font-size: ${theme.sizes[type]};
    color: ${theme.colors[color]};
    font-weight: ${type === 'headline' ? 600 : 400};
  `}
`;
