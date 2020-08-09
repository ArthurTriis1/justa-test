import React from 'react';

import * as S from './styles';

interface ImagesContainerProps {
    title: string;
}

const ImagesContainer: React.FC<ImagesContainerProps> = ({ children, title }) => {
    return (
        <S.ImageContainerWrapper>
            <h3>
                { title }:
            </h3>
            <S.ListImageContainer>
                { children }
            </S.ListImageContainer>
        </S.ImageContainerWrapper>
    )
}

export default ImagesContainer;