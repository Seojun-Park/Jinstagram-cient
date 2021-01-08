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
    console.log(posts)
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
                    console.log(image)
                    return (<S.Image url={image.url} showing={index === currentItem} key={index}></S.Image>)
                })}
                <S.Dots>{posts.images && posts.images.map((image: any, index: number) => {
                    return (<S.Dot onClick={() => setCurrentItem(index)} current={index === currentItem} />)
                })}</S.Dots>
            </S.Images>
            <S.Meta>
                <S.Buttons>
                    <S.Button>{posts.isLiked ? <HeartFull /> : <HeartEmpty />}</S.Button>
                    <S.Button><Comment /></S.Button>
                </S.Buttons>
                <span style={{ fontWeight: 600 }}>like count</span>
                <S.Caption>
                    <span style={{ fontWeight: 600 }}>{posts.user.username}</span> {posts.caption}
                </S.Caption>
                <S.Comments>
                    <S.Comment>
                        comment
                    </S.Comment>
                </S.Comments>
                <S.Timestamp>created at</S.Timestamp>
                <S.Textarea
                    placeholder="Add a comment..."
                />
            </S.Meta>
        </S.Container>
    )
}

export default FeedBoxPresenter