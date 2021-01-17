import { useLazyQuery, useMutation } from '@apollo/client'
import {
    ToggleLike,
    ToggleLikeVariables,
    AddComment,
    AddCommentVariables,
    GetLike,
    GetLikeVariables
} from '../../types/api'
import React, { useCallback, useEffect, useState } from 'react'
import useInput from '../../Hooks/useInput'
import FeedBoxPresenter from './FeedBoxPresenter'
import { ADD_COMMENT, GET_LIKE, TOGGLE_LIKE } from './FeedBoxQueries'
import { GET_FULL_POST } from '../../Routes/Home/HomeQueries'

interface IProps {
    posts: any
    me: any
}

const FeedBoxContainer: React.FC<IProps> = ({ posts, me }) => {
    const [currentItem, setCurrentItem] = useState<number>(0)
    const [likes, setLikes] = useState<any>([])
    const [likeCount, setLikeCount] = useState<number>(posts.likes.length)
    const [commentS, setCommentS] = useState<any>([])
    const [comment, commentChange, setComment] = useInput("")
    const [isLiked, setIsLiked] = useState<boolean>(likes && me && likes.userId === me.id ? true : false)
    const [ToggleLikeMutation] = useMutation<ToggleLike,
        ToggleLikeVariables>(TOGGLE_LIKE, {
            variables: {
                postId: posts.id
            },
            onCompleted: ({ ToggleLike }) => {
                const { ok, err, ret } = ToggleLike;
                if (ok && ret) {
                    if (ret === "DEL") {
                        setLikeCount(likeCount - 1);
                    } else if (ret === "CRA") {
                        setLikeCount(likeCount + 1);
                    }
                } else {
                    console.log(err)
                }
            }
        })

    const [getPost, { loading }] = useLazyQuery<GetLike, GetLikeVariables>(GET_LIKE, {
        onCompleted: ({ GetLike }) => {
            const { ok, err, likes } = GetLike;
            if (ok && likes) {
                setLikes(likes)
            } else {
                console.log(err);
            }
        }
    })

    useEffect(() => {
        if (posts.id) {
            getPost({ variables: { postId: posts.id } })
        }
    }, [getPost, posts.id])

    useEffect(() => {
        if (likes) {
            const idx = likes.findIndex((like: any) => {
                return like.userId === me.id
            })
            if (likes[idx] !== undefined) {
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        }
    }, [likes, me, setIsLiked])


    const [AddCommentMutation] = useMutation<
        AddComment,
        AddCommentVariables
    >(ADD_COMMENT, {
        variables: {
            text: comment,
            postId: posts.id
        },
        onCompleted: ({ AddComment }) => {
            const { ok, err } = AddComment;
            if (ok) {
                setCommentS([...commentS, comment])
                setComment("")
            } else {
                console.log(err)
            }
        },
        refetchQueries: [{ query: GET_FULL_POST, variables: { page: 1 } }]
    })

    const handleToggleLike = async (e: React.MouseEvent) => {
        e.preventDefault()
        await ToggleLikeMutation();
        isLiked ? setIsLiked(false) : setIsLiked(true)
    }

    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event
        if (keyCode === 13) {
            AddCommentMutation();
        }
    }, [AddCommentMutation])

    useEffect(() => {
        if (comment !== "") {

            document.addEventListener("keydown", handleUserKeyPress)
            return () => {
                document.removeEventListener('keydown', handleUserKeyPress)
            }
        }
    }, [comment, handleUserKeyPress])


    if (loading || !me || !likes) {
        return (
            <>
                loading...
            </>
        )
    } else {
        return (
            <FeedBoxPresenter
                posts={posts}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                handleToggleLike={handleToggleLike}
                likeCount={likeCount}
                comment={comment}
                commentChange={commentChange}
                commentS={commentS}
                me={me}
            />
        )
    }
}

export default FeedBoxContainer