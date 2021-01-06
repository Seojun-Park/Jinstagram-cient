import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { storage } from '../../Firebase'
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
    const [me, setMe] = useState<any>();
    const [flag, setFlag] = useState<boolean>(false);
    const [imageURL, setImageURL] = useState<any>();
    const [progress, setProgress] = useState(1);
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

    useEffect(() => {
        if (flag && me) {
            let uploadTask = storage
                .ref(`/${me.username}/profilePhoto`)
                .put(imageURL);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    setProgress(percentUploaded)
                },
                (err) => { console.log(err) },
                () => {
                    storage.ref(`/${me.username}/`)
                        .child('profilePhoto')
                        .getDownloadURL()
                        .then((url) => {
                            setImageURL(url)
                        })
                }
            )
        }
    }, [flag, me, setProgress, imageURL])

    if (loading || me === undefined) {
        return (<>Loading...</>)
    } else {
        return (
            <HomePresenter me={me} term={term} termChange={termChange} posts={posts} />
        )
    }
}

export default HomeContainer