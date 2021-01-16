import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { storage } from '../../Firebase'
import { getAddress } from '../../Hooks/Geocoding'
import { ME } from '../../sharedquaries'
import {
    GetFullPost,
    GetFullPostVariables,
    Me,
    UploadPost,
    UploadPostVariables
} from '../../types/api'
import HomePresenter from './HomePresenter'
import useInput from '../../Hooks/useInput'
import {
    GET_FULL_POST,
    UPLOAD_POST
} from './HomeQueries'

interface IProps { }

const HomeContainer: React.FC<IProps> = () => {
    const [me, setMe] = useState<any>();
    const [flag, setFlag] = useState<boolean>(false);
    const [images, setImages] = useState<any>()
    const [caption, setCaption] = useInput("")
    const [imageUrl, setImageUrl] = useState<string[]>([]);
    const [progress, setProgress] = useState(1);
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState<any>();
    const [lat, setLat] = useState<number>(0)
    const [lng, setLng] = useState<number>(0)
    const [location, setLocation] = useState<string>("")

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
    useQuery<GetFullPost, GetFullPostVariables>(GET_FULL_POST, {
        fetchPolicy: "network-only",
        variables: {
            page
        },
        onCompleted: ({ GetFullPost }) => {
            const { ok, err, post } = GetFullPost;
            if (ok && post) {
                setPosts(post)
            } else {
                console.log(err)
            }
        }
    })

    const [UploadPostMutation] = useMutation<UploadPost, UploadPostVariables>(UPLOAD_POST, {
        variables: {
            caption,
            location,
            images: imageUrl
        }, refetchQueries: [{ query: GET_FULL_POST, variables: { page: 1 } }],
        onCompleted: ({ UploadPost }) => {
            const { ok, err } = UploadPost;
            if (ok) {
                window.location.reload();
            } else {
                console.log(err);
            }
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
                                setImageUrl(prev => [...prev, url])
                            })
                    }
                )
            }
        }
    }, [flag, me, images])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos && pos.coords) {
                setLat(pos.coords.latitude);
                setLng(pos.coords.longitude)
            }
        })
    }, [setLat, setLng])


    useEffect(() => {
        if (lat !== 0 && lng !== 0) {
            getAddress(lat, lng, setLocation);
        }
    }, [lat, lng, setLocation])

    const handlePost = async () => {
        if (!imageUrl && caption === "") {
            toast.error("You need to upload any photo and caption")
        } else if (imageUrl && caption) {
            await UploadPostMutation();
        }
    }


    if (loading || me === undefined) {
        return (<>Loading...</>)
    } else {
        return (
            <HomePresenter me={me}
                posts={posts}
                flag={flag}
                progress={progress}
                page={page}
                setPage={setPage}
                handleUpload={handleUpload}
                caption={caption}
                setCaption={setCaption}
                handlePost={handlePost}
            />
        )
    }
}

export default HomeContainer