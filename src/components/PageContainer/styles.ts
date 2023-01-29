import styled, { css } from 'styled-components';

export const Container = styled.main`
    ${({ theme }) => css`
    max-width: 120rem;
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.small};
   `}
`;
