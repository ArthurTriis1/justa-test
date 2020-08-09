import styled from 'styled-components';
import backgroundImage from '../../assets/banner.png';

export const HomeMain = styled.main`
    min-height: calc(100vh - 72px);
    height: max-content;
    width: 100vw;
    background-image: url(${backgroundImage});
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

export const HomeContainer = styled.div`
    width: 60%;
    height: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width: 600px) {
        width: 90%;
        padding-top: 20px;
    }
`

export const HomeTitle = styled.h1`
    font-weight: 400;
    font-size: 50px;
    color: #FFF;
    margin-bottom: 10px;
    
    @keyframes blink {
        50% {
            opacity: 0.0;
        }
    }
    @-webkit-keyframes blink {
        50% {
            opacity: 0.0;
        }
    }

    span {
        animation: blink 1s step-start 0s infinite;
        -webkit-animation: blink 1.5s step-start 0s infinite;
    }

    @media(max-width: 600px) {
        font-size: 38px;
    }
`