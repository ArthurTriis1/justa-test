import styled from 'styled-components';

import backgroundImage from '../../assets/banner.png';

export const NotFoundMain = styled.main`
    min-height: calc(100vh - 72px);
    height: max-content;
    width: 100vw;
    background-image: url(${backgroundImage});
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: #FFF;

    h1 {
        margin-top: 100px;
        font-weight: 800;
        font-size: 100px;
    }

    h3 {
        font-size: 40px;
    }
`

export const TextNotFount = styled.h1`

`