import React from 'react';
import * as S from './FeedBoxStyles'
import { Comment, HeartEmpty, HeartFull } from '../Icon'

interface IProps {
    posts: any
    handleSlide: any
    currentItem: number
    setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}

const FeedBoxPresenter: React.FC<IProps> = ({
    posts,
    handleSlide,
    currentItem,
    setCurrentItem
}) => {
    // console.log(posts)
    const time = new Date(posts.createdAt * 1000)
    console.log(time.getMonth())
    return (
        <S.Container>
            <S.Header>
                <S.ProfileImage src={posts.user.profilePhoto} />
                <S.UserCol>
                    <S.ExtendedLink to="/"><span style={{ fontWeight: 600 }}>{posts.user.username}</span></S.ExtendedLink>
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
                    <S.Button>{posts.isLiked ? <HeartFull /> : <HeartEmpty />}</S.Button>
                    <S.Button><Comment /></S.Button>
                </S.Buttons>
                {posts.likes && posts.likes.length === 1 ?
                    <span style={{ fontWeight: 600 }}>1 like</span> :
                    <span style={{ fontWeight: 600 }}>{posts.likes.length} likes</span>
                }
                <S.Caption>
                    <span style={{ fontWeight: 600 }}>{posts.user.username}</span> {posts.caption}
                </S.Caption>
                {posts.comments &&
                    <S.Comments>
                        {posts.comments.map((comment: any, index: number) => {
                            return (
                                <S.Comment key={index}>
                                    <span style={{ fontWeight: 600 }}>{comment.user.username}</span> {comment.text}
                                </S.Comment>
                            )
                        })}
                    </S.Comments>
                }
                <S.Timestamp></S.Timestamp>
                <S.Textarea
                    placeholder="Add a comment..."
                />
            </S.Meta>
        </S.Container>
    )
}

export default FeedBoxPresenter