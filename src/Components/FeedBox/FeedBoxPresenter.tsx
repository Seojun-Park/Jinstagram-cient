import React from 'react';
import * as S from './FeedBoxStyles'
import { Comment, HeartEmpty, HeartFull } from '../Icon'

interface IProps {
    posts: any
    currentItem: number
    setCurrentItem: React.Dispatch<React.SetStateAction<number>>
    isLiked: boolean
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>
    handleToggleLike: any
    likeCount: number
    comment: string
    commentChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
    commentS: any
    me: any
}

const FeedBoxPresenter: React.FC<IProps> = ({
    posts,
    currentItem,
    setCurrentItem,
    isLiked,
    setIsLiked,
    handleToggleLike,
    likeCount,
    comment,
    commentChange,
    commentS,
    me
}) => {
    let time = Math.floor(posts.createdAt / 1000)
    time *= 1000
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const min = date.getMinutes()

    return (
        <S.Container>
            <S.Header>
                <S.ProfileImage src={posts.user.profilePhoto} />
                <S.UserCol>
                    <S.ExtendedLink to={{
                        pathname: `/profile/${posts.user.username}`,
                        state: { id: posts.user.id }
                    }}><span style={{ fontWeight: 600 }}>{posts.user.username}</span></S.ExtendedLink>
                    <S.Location>{posts.location}</S.Location>
                </S.UserCol>
            </S.Header>
            <S.Images>
                {posts.images && posts.images.map((image: any, index: number) => {
                    return (<S.Image url={image.url} showing={index === currentItem} key={index}></S.Image>)
                })}
                <S.Dots>{posts.images && posts.images.map((image: any, index: number) => {
                    return (<S.Dot onClick={() => setCurrentItem(index)} current={index === currentItem} key={index} />)
                })}</S.Dots>
            </S.Images>
            <S.Meta>
                <S.Buttons>
                    <S.Button onClick={handleToggleLike}>
                        {isLiked ? <HeartFull /> : <HeartEmpty />}
                    </S.Button>
                    <S.Button><Comment /></S.Button>
                </S.Buttons>
                {likeCount === 1 ?
                    <span style={{ fontWeight: 600 }}>1 like</span> :
                    <span style={{ fontWeight: 600 }}>{likeCount} likes</span>
                }
                <S.Caption>
                    <S.CommentLink to={`/profile/${posts.user.username}`} style={{ fontWeight: 600 }}>{posts.user.username}</S.CommentLink > {posts.caption}
                </S.Caption>
                {posts.comments &&
                    <S.Comments>
                        {posts.comments.map((comment: any, index: number) => {
                            return (
                                <S.Comment key={index}>
                                    {/* <S.CommentLink to={`/profile/${comment.user.username}`} style={{ fontWeight: 600 }}>{comment.userId}</S.CommentLink> {comment.text} */}
                                    <S.CommentLink to={`/profile/${comment.user.username}`} style={{ fontWeight: 600 }}>{comment.user.username}</S.CommentLink> {comment.text}
                                </S.Comment>
                            )
                        })}
                        {commentS && commentS.length !== 0 && commentS.map((com: any, index: number) => {
                            return (
                                <S.Comment key={index}>
                                    <S.CommentLink to={`/profile/${me.username}`} style={{ fontWeight: 600 }}>{me.username}</S.CommentLink> {com}
                                </S.Comment>
                            )
                        }
                        )}
                    </S.Comments>
                }
                <S.Timestamp>{`${year}.${month}.${day} ${hour}:${min}`}</S.Timestamp>
                <S.Textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={commentChange}
                />
            </S.Meta>
        </S.Container>
    )
}

export default FeedBoxPresenter