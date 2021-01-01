import React from 'react'
import Helmet from 'react-helmet'
import * as S from './AuthStyles'

const AuthHomePresenter = () => {
    return (
        <S.Wrapper>
            <Helmet><title>Auth | Jinstagram</title></Helmet>
            <S.Container>Auth hum</S.Container>
        </S.Wrapper>
    )
}

export default AuthHomePresenter