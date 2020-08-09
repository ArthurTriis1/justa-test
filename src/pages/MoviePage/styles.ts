import styled from 'styled-components';

interface IImage{
    backgroundImage?:string;
}

export const MovieMain = styled.main`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(36,104,128,1) 0, rgba(36,104,128,1) 130px, rgba(40,41,45,0)  130px);
    @media(max-width: 780px){
        background-image: linear-gradient(to bottom, rgba(36,104,128,1) 0, rgba(36,104,128,1) 200px, rgba(40,41,45,0)  200px);
    }
`

export const MovieWrapper = styled.div`
    padding-top: 30px;
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

export const Genre = styled.span`
    background: #ccc;
    padding: 5px 20px;
    margin: 0 5px;
    color: #5f5f5f;
    font-weight: 500;
    white-space: nowrap;
`

export const AditionalInfosWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 780px){
        align-items: center;
    }
`

export const Actor = styled.div`
    max-width: 150px;
    margin: 0 10px;
    text-align: start;
    padding: 10px 0;
    font-size: 20px;
    white-space: nowrap;

    img {
        height: 230px;
    }

    h5{
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h6{
        font-weight: 300;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ImageOfGalery = styled.img`
    margin: 5px 10px;
    height: 150px;
    box-shadow: 3px 3px 9px 0px black;
    margin-bottom: 30px;
`

export const SimilarMovie = styled(Actor)`
    img{
        transition: all 0.3s ease-in;
    }
   
    &:hover {
        cursor: pointer;

        img {
            transform: scale(1.2);
            z-index: 1000;
        }
    }
`