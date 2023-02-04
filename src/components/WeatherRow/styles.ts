import styled, { css } from 'styled-components';

export const Container = styled.article`
    ${({ theme }) => css`
    
    background: rgba(27, 41, 172, 0.41);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(27, 41, 172, 0.3);
    padding: 1rem;
    margin-bottom: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & span {
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.mediumGray};
        margin: 0;
    }

    .flex-article {
        display: flex;
        gap: 1rem;
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
