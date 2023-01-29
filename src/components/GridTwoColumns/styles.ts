import styled, { css } from 'styled-components';
import { Container as IconContainer } from '../WeatherIcon/styles';

export const Container = styled.section`
   ${({ theme }) => css`
   display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
    align-items: center;
    
    @media ${theme.media.gteMedium} {
        grid-template-columns: repeat(2, 1fr);
    }

   `}

`;

export const LeftSide = styled.div`

${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.white}; 
    
    & ${IconContainer} {
       flex: 1;
       align-content: center;
       margin: auto;
    }

    @media ${theme.media.gteMedium} {
        border: none;
        border-right: 1px solid ${theme.colors.white};
    }

`}
`;

export const TempContainer = styled.div`
   ${({ theme }) => css`
   flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    & h2 {
        margin: 0;
        font-size: ${theme.font.sizes.xhuge};
        font-weight: 400;
    }

    & p {
        margin: 0;
    }
   `}
`;

export const RightSide = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    height: 16rem;
`;

export const Row = styled.div`
    ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

    & span {
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.mediumGray};
    }
    `}
`;
