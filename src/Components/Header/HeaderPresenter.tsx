import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
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
    const [open, setOpen] = useState<boolean>(false)
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
                setOpen(true);
            }
            else {
                console.log(err)
            }
        }
    })



    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            setOpen(false);
        }
        if (open) {
            document.addEventListener("click", (e) => handleClick(e));
            return function cleanUp() {
                document.removeEventListener('click', (e) => handleClick(e))
            }
        }

    }, [open])


    if (loading || !me) {
        return (
            <>
                loading...
            </>
        )
    }

    console.log(searchedUser);
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
                {open ?
                    (searchedUser && searchedUser.length ?
                        <S.SearchResult>
                            {searchedUser.map((user: any, index: number) => {
                                return (
                                    <S.SearchLink to={`/profile/${user.username}`} key={index}>
                                        <S.SearchRow>
                                            <S.ProfileImage src={user.profilePhoto} alt={user.username} />
                                            <S.SearchUsername>{user.username}</S.SearchUsername>
                                        </S.SearchRow>
                                    </S.SearchLink>
                                )
                            })}
                        </S.SearchResult> : <S.SearchResult>
                            <S.SearchInfo>No user found</S.SearchInfo>
                        </S.SearchResult>)
                    : ""}
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