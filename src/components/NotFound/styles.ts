import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/backgrounds/404background.png');
    background-position: top left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    >h1 {
        font-size: 4rem;
       margin-top: -10rem;
       text-align: center; 
    }
`;
