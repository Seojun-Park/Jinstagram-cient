import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { ME, SEARCH_USER } from '../../sharedquaries';
import { Me, SearchUser, SearchUserVariables } from '../../types/api';
import { Link } from 'react-router-dom'
import { Logo } from '../Icon'
import * as S from './HeaderStyles'
import useInput from '../../Hooks/useInput';

interface IProps {
    url?: string

}

const HeaderPresenter: React.FC<IProps> = ({ url }) => {
    const [me, setMe] = useState<any>();
    const [term, termChange] = useInput("")
    const [searchedUser, setSearchedUser] = useState<any>([]);
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
    useQuery<SearchUser, SearchUserVariables>(SEARCH_USER, {
        skip: term === "",
        variables: {
            term
        },
        onCompleted: ({ SearchUser }) => {
            const { ok, err, users } = SearchUser;
            if (ok && users) {
                setSearchedUser(users)
            }
            else {
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
            <S.Col>
                <Link to="/"><Logo /></Link>
            </S.Col>
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