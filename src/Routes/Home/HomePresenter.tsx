
import React from 'react'
import Header from '../../Components/Header'
import FeedBox from '../../Components/FeedBox'
import * as S from './HomeStyles'

interface IProps {
    me: any
    term: string
    termChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
}

const HomePresenter: React.FC<IProps> = ({ me, term, termChange }) => {
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} term={term} termChange={termChange} />
            <S.Container>
                {me.following === null ? "you don't follow anyone" : "so on"}
                <FeedBox />
            </S.Container>
        </S.Wrapper >
    )
}

export default HomePresenter