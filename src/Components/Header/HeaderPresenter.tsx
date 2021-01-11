import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { ME } from '../../sharedquaries';
import { Me } from '../../types/api';
import * as S from './HeaderStyles'

interface IProps {
    url?: string
    term: string
    termChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
}

const HeaderPresenter: React.FC<IProps> = ({ url, term, termChange }) => {
    const [me, setMe] = useState<any>();
    const { loading } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me;
            if (ok && user) {
                setMe(user);
            } else {
                console.log(err)
            }
        }
    })
    if (loading || !me) {
        return (
            <>
                loading...
            </>
        )
    }
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
                <S.ExtendedLink to={`/profile/${me.username}`}>
                    <S.ProfileImage src={`${url}`} alt="profile" />
                </S.ExtendedLink>
            </S.Col>
        </S.Container>
    )
}

export default HeaderPresenter