import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import useInput from '../../Hooks/useInput'
import { ME } from '../../sharedquaries'
import {
    GetFollowedPost,
    GetFollowedPostVariables,
    Me,
    SearchUser,
    SearchUserVariables
} from '../../types/api'
import HomePresenter from './HomePresenter'
import { GET_FOLLOW_POST, SEARCH_USER } from './HomeQueries'


const HomeContainer = () => {
    const [me, setMe] = useState<any>()
    const [page, setPage] = useState<number>(1);
    const [term, termChange] = useInput("")
    const [posts, setPosts] = useState<any>();
    const [searchedUser, setSearchedUser] = useState<any>()

    const { loading } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me
            if (ok && user) {
                setMe(user);
            } else if (err) {
                toast.error(err);
            }
        }
    })

    useQuery<GetFollowedPost, GetFollowedPostVariables>(GET_FOLLOW_POST, {
        variables: {
            page
        },
        onCompleted: ({ GetFollowedPost }) => {
            const { ok, err, post } = GetFollowedPost;
            if (ok) {
                if (post) {
                    setPosts(post);
                }
            } else if (err) {
                toast.error(err);
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
            if (ok) {
                if (users) {
                    setSearchedUser(users);
                }
            } else {
                console.log(err)
            }
        }
    })

    if (loading || me === undefined) {
        return (<>Loading...</>)
    } else {
        return (
            <HomePresenter me={me} term={term} termChange={termChange} />
        )
    }
}

export default HomeContainer