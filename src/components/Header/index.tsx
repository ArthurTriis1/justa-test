import React, { useState, useLayoutEffect } from 'react';
import { useRouteMatch } from 'react-router-dom'
import * as S from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header: React.FC = (props) => {
    
    const match = useRouteMatch("/");
    const [showBack, setShowBack] = useState(!(window.location.pathname === '/'))

    useLayoutEffect(() => {
        setShowBack(!(window.location.pathname === '/'));
    }, [match])

    return (
        <S.HeaderWrapper>
                {
                    showBack &&
                    <S.BackButton to='/'>
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