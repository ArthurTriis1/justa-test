import styled from 'styled-components';

export const Footer = styled.div`
    padding: 5px 0;
    width: 100%;
    height: 30px;
    background-color: #1d6d8a;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    color: #FFF;
    font-weight: 500;

    h3 {

    }

    a{
        margin-left: 5px;
        color: #FFF;
        text-decoration: none;
        font-weight: 800;
        
        &:hover {
            text-decoration: underline;
        }
    }
`