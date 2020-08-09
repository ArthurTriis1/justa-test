import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import * as S from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header: React.FC = () => {
    
    const match = useRouteMatch('/');

    return (
        <S.HeaderWrapper>
                {
                    !match?.isExact &&
                    <S.BackButton 
                        data-testid='back-link'
                        to='/'
                    >
                            <AiOutlineArrowLeft size={30}/>
                    </S.BackButton>
                }
            <S.HeaderLogo>
                JustaFlix
            </S.HeaderLogo>
        </S.HeaderWrapper>
    )
}

export default Header;