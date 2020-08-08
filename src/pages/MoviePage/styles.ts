import styled from 'styled-components';

interface IImage{
    backgroundImage?:string;
}

export const MovieMain = styled.main`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(40,41,45);
    background: linear-gradient(0deg, rgba(40,41,45,0) 70%, rgba(36,104,128,1) 70%);

`

export const MovieWrapper = styled.div`
    padding-top: 50px;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media(max-width: 780px){
        justify-content: center;
    }
`

export const MovieImage = styled.div<IImage>`

    height: 350px;
    width: 236px;
    border: 8px solid #FFF;
    background-color: #FFF;
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    margin-top: 0px;
    min-width: 200px;
    color: #FFF;
    margin-left: 30px;

    @media(max-width: 780px){
        margin-top: 50px;
        color: #3C3B3B;
        margin-left: 0px;
        max-width: 80%;
    }

    @media(max-width: 507px){
        margin-left: 0px;
    }

    h1 {
        span {
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 136.69%;
            margin-left: 10px;
        }
    }

    span {
        font-family: Roboto;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 136.69%;
    }

    svg{
        padding-top: 5px;
        color: #F5C518;
    }
`

export const Sinopse = styled.p`
    margin-top: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #3C3B3B;
`

export const GenresWrapper = styled.section`
    
    margin: 30px 0;
    /* padding: 10px 0px; */
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 80%;
    overflow-x: scroll;

    h3{
        color: #1d6d8a;
        margin-right: 10px;
    }
`

export const Genre = styled.span`
    background: #ccc;
    padding: 5px 20px;
    margin: 0 5px;
    color: #5f5f5f;
    font-weight: 500;
    white-space: nowrap;
`