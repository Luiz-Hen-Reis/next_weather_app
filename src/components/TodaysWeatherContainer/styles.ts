import styled, { css } from 'styled-components';

export const Container = styled.section`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.small};
    `}
`;

export const RowContainer = styled.div`
${({ theme }) => css`
        margin-top: ${theme.spacings.medium};
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;

        @media ${theme.media.gteMedium} {
            flex-flow: row nowrap;
        }
    `}
`;
