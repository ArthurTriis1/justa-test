import styled from 'styled-components';
interface IImage{
    backgroundImage?:string;
}

export const MovieSearchSpanWrapper = styled.span`
    width: 100%;
    display: flex;
    padding: 5px 0px 5px 10px ;
    align-items: center;
    background-color: #1d6d8a;
    color: #FFF;
    border-bottom: 1px solid #FFF;

    /* &:first-child{
        padding: 10px 0px 5px 10px ;
    }

    &:last-child{
        padding: 5px 0px 10px 10px ;
        border-bottom: 0px solid #FFF;
    } */

    &:hover{
        background-color: #1d6d8a;
        opacity: 0.7;
        cursor: pointer;
    }
    
    
`

export const MovieSearchImage = styled.div<IImage>`
    min-width: 50px;
    max-width: 50px;
    height: 80px;
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #FFF;
    border: 2px solid #fff;
    border-radius: 5px;
`

export const MovieSearchInfosWrapper = styled.div`
    padding: 5px 10px;
`

export const MovieTitle = styled.div`
    width: 100%;
    font-weight: 800;
    font-size: 18px;
`

export const MovieInfo = styled.p`
    font-weight: 500;
    font-size: 16px;
`