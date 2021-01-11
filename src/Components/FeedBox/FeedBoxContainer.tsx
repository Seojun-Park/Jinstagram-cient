import { useMutation, useQuery } from '@apollo/client'
import { ToggleLike, ToggleLikeVariables, AddComment, AddCommentVariables, Me } from '../../types/api'
import React, { useCallback, useEffect, useState } from 'react'
import useInput from '../../Hooks/useInput'
import FeedBoxPresenter from './FeedBoxPresenter'
import { ADD_COMMENT, TOGGLE_LIKE } from './FeedBoxQueries'
import { ME } from '../../sharedquaries'
import { GET_FULL_POST } from '../../Routes/Home/HomeQueries'

interface IProps {
    posts: any
}

const FeedBoxContainer: React.FC<IProps> = ({ posts }) => {
    const [currentItem, setCurrentItem] = useState<number>(0)
    const [isLiked, setIsLiked] = useState<boolean>(posts.isLiked)
    const [likeCount, setLikeCount] = useState<number>(posts.likes.length)
    const [commentS, setCommentS] = useState<any>([])
    const [comment, commentChange] = useInput("")
    const [me, setMe] = useState<any>();
    const [ToggleLikeMutation] = useMutation<ToggleLike,
        ToggleLikeVariables>(TOGGLE_LIKE, {
            variables: {
                postId: posts.id
            },
            onCompleted: ({ ToggleLike }) => {
                const { ok, err } = ToggleLike;
                if (ok && isLiked) {
                    setLikeCount(likeCount - 1)
                } else if (ok && !isLiked) {
                    setLikeCount(likeCount + 1)
                } else {
                    console.log(err)
                }
            }
        })

    const { loading } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me
            if (ok && user) {
                setMe(Me.user)
            } else {
                console.log(err)
            }
        }
    })

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


    if (loading || !me) {
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