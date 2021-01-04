import React from 'react'
import Header from '../../Components/Header'
import * as S from './HomeStyles'

interface IProps {
    me: object
}

const HomePresenter: React.FC<IProps> = ({ me }) => {
    console.log(me)

    return (
        <S.Container>
            <Header />
            home
        </S.Container>
    )
}

export default HomePresenter