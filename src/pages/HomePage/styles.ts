import styled from 'styled-components';
import backgroundImage from '../../assets/banner.png';

export const HomeMain = styled.main`
    height: calc(100% - 72px);
    width: 100vw;
    background-image: url(${backgroundImage});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HomeContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    padding-top: 100px;
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

    @media(max-width: 600px) {
        font-size: 35px;
    }
`