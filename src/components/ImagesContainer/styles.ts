import styled from 'styled-components';

export const ImageContainerWrapper = styled.section`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #1d6d8a;
    overflow-x: visible;
    

    h3 {
        margin-bottom: 20px;
        font-size: 20px;
    }

    &:last-child{
        margin-bottom: 50px;
    }
`

export const ListImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;

    overflow-x: scroll;

`