import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Container = styled.h1`
  ${({ theme }) => css`
  font-size: theme.font.sizes.medium;
  font-weight: 500;
  margin: 0;
  `}; 
`;

export const DateContainer = styled(Container)`
  ${({ theme }) => css`
  font-size: theme.font.sizes.small;
  font-weight:  300%;
  `}; 
`;
