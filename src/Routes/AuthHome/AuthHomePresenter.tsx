import React from 'react'
import Helmet from 'react-helmet'
import * as S from './AuthStyles'

const AuthHomePresenter = () => {
    return (
        <S.Container>
            <Helmet><title>Auth | Jinstagram</title></Helmet>
            <S.WideScreen>fisrt WideScreen</S.WideScreen>
            <S.WideScreen>Second WideScreen</S.WideScreen>
            <S.NarrowScreen>Auth home</S.NarrowScreen>
        </S.Container>
    )
}

export default AuthHomePresenter