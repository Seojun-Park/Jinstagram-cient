
import React from 'react'
import Header from '../../Components/Header'
import FeedBox from '../../Components/FeedBox'
import * as S from './HomeStyles'

interface IProps {
    me: any
    posts: any
    term: string
    termChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
}

const HomePresenter: React.FC<IProps> = ({
    me,
    term,
    termChange,
    posts
}) => {
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} term={term} termChange={termChange} />
            <S.Container>
                {me.following === null ? "you don't follow anyone" : "so on"}
                
                {/* map method will be done on here */}
                <FeedBox posts={posts} />
            </S.Container>
        </S.Wrapper >
    )
}

export default HomePresenter