import styled, { css } from 'styled-components';

export const Container = styled.section`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.small};
    `}
`;

export const RowContainer = styled.div`
${({ theme }) => css`
        margin-top: ${theme.spacings.medium};
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;

        @media ${theme.media.gteMedium} {
            grid-template-columns: repeat(6, 1fr);
            gap: .7rem;
        }
    `}
`;
