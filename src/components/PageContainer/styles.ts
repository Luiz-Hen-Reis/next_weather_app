import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.colors.primaryColor};
    padding: ${theme.spacings.large} 0;

    @media ${theme.media.gteMedium} {
        height: 100vh;
    }
   `}
`;

export const Container = styled.main`
    ${({ theme }) => css`
    max-width: 120rem;
    margin: auto;
    padding: 0 ${theme.spacings.small};
   `}
`;
