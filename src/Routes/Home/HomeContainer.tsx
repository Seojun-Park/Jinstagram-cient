import { useMutation, useQuery } from '@apollo/client'
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
    SearchUserVariables,
    UploadPost,
    UploadPostVariables
} from '../../types/api'
import HomePresenter from './HomePresenter'
import { GET_FOLLOW_POST, SEARCH_USER, UPLOAD_POST } from './HomeQueries'


const HomeContainer = () => {
    const [me, setMe] = useState<any>();
    const [flag, setFlag] = useState<boolean>(false);
    const [images, setImages] = useState<any>()
    const [caption, setCaption] = useInput("")
    const [imageUrl, setImageUrl] = useState<string[]>([]);
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

    const [UploadPostMutation] = useMutation<UploadPost, UploadPostVariables>(UPLOAD_POST, {
        variables: {
            caption,
            location: "",
            images: imageUrl
        }
    })

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (event.target && event.target.files) {
            if (event.target !== null && event.target.files && event.target.files.length !== null) {
                setImages(event.target.files)
                setFlag(true);
            }
        }
    }

    useEffect(() => {
        if (flag && me && images) {
            for (let i = 0; i < images.length; i++) {
                let uploadTask = storage
                    .ref(`/${me.username}/images/${images[i].name}`)
                    .put(images[i]);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        setProgress(percentUploaded)
                    },
                    (err) => { console.log(err) },
                    () => {
                        storage.ref(`/${me.username}/images/`)
                            .child(`${images[i].name}`)
                            .getDownloadURL()
                            .then((url) => {
                                console.log(url)
                                setImageUrl(prev => [...prev, url])
                            })
                    }
                )
            }
        }
    }, [flag, me, images])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) =>
            console.log(pos))
    }, [])

    if (loading || me === undefined) {
        return (<>Loading...</>)
    } else {
        return (
            <HomePresenter me={me}
                term={term}
                termChange={termChange}
                posts={posts}
                imageUrl={imageUrl}
                flag={flag}
                setImageUrl={setImageUrl}
                progress={progress}
                handleUpload={handleUpload}
                caption={caption}
                setCaption={setCaption}
                UploadPostMutation={UploadPostMutation}
            />
        )
    }
}

export default HomeContainer