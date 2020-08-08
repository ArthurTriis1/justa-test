import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    display: flex;
    height: 72px;
    width: 100%;
    background-color: #1d6d8a;    
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderLogo = styled.h1`
    color: #FFF;
    font-size: 45px;
    letter-spacing: 10px;
    font-family: 'Russo One', sans-serif;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

    @media(max-width: 600px){
        font-size: 30px;
    }
`

export const BackButton = styled(Link)`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid #FFF;
    position: absolute;
    top: 15px;
    left: 10px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
`