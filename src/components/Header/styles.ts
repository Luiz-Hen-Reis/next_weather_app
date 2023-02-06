import styled, { css } from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Form = styled.form`
    ${({ theme }) => css`
    display: flex;
    position: relative;
    margin-top: ${theme.spacings.xsmall};

    >input {
      all: unset;
      display: block;
      padding: 0.9rem;
      border-bottom: 1px solid ${theme.colors.mediumGray};
      
      
      &::placeholder {
        color: ${theme.colors.mediumGray};
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    >button {
        all: unset;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }
    `}
   
`;
