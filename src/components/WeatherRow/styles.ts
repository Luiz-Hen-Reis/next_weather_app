import styled, { css } from 'styled-components';

export const Container = styled.article`
    ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    padding: 1rem;
    border: 1px solid #000;
    margin-bottom: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & span {
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.mediumGray};
        margin: 0;
    }

    @media ${theme.media.gteMedium} {
        height: 23rem;
        flex-direction: column;
        border-radius: .1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-bottom: 1rem;

        .windInfo {
            display: none;
        }
    }
    `}
`;