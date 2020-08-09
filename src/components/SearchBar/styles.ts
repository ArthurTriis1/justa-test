import styled from 'styled-components';


export const SearchBarWrapper = styled.div`
    height: 60px;
    width: 100%;
    background-color: #FFF;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border-width: 0px;
    outline: 0;
    padding: 5px 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300g;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0.06em;

    color: #1d6d8a; 
`

export const SearchButton = styled.button`
    /* background-color: #0D5873; */
    background-color: #FFF;
    border-left: 1px solid #3F3F3F;
    height: 100%;
    width: 80px;
    border: 0;
    outline: none;
    color: #3F3F3F;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* &:hover{
        cursor: pointer;
        background-color: #1d6d8a;
    } */
`

export const MovieSearchContainer = styled.div`
    width: 80%;
    background-color: #FFF;
    max-height: 50vh;
    overflow-y: scroll;
    border-radius: 0 0 10px 10px;
    overflow-x: hidden;

`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const SadMessage = styled.h1`
    background-color: #1d6d8a;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    

`