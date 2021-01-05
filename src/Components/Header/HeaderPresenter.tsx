import React from 'react'
import * as S from './HeaderStyles'

interface IProps {
    url?: string
    term: string
    termChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
}

const HeaderPresenter: React.FC<IProps> = ({ url, term, termChange }) => {
    return (
        <S.Container>
            <S.Col></S.Col>
            <S.Col>
                <S.Search
                    type="text"
                    placeholder="Search"
                    value={term}
                    onChange={termChange}
                />
            </S.Col>
            <S.Col>
                <S.ExtendedLink to="/">
                    <S.ProfileImage src={`${url}`} alt="profile" />
                </S.ExtendedLink>
            </S.Col>
        </S.Container>
    )
}

export default HeaderPresenter