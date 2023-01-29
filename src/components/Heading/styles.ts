import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
  font-size: theme.font.sizes.medium;
  font-weight: 400;
  margin: 0;
  `}; 
`;

export const DateContainer = styled(Container)`
  ${({ theme }) => css`
  font-size: theme.font.sizes.small;
  font-weight:  300%;
  `}; 
`;
