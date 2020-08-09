import React from 'react';

import * as S from './styles';

const NotFound: React.FC = () => {
    return (
        <S.NotFoundMain>
            <h1>
                404
            </h1>
            <h3>
                Não tem nada aqui!
            </h3>
        </S.NotFoundMain>
    )
}

export default NotFound;