import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
    ${({ theme, background }) => css`
    width: 100vw;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
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
