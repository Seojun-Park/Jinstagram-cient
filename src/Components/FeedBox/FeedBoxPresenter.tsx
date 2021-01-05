import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './FeedBoxStyles'

interface IProps {
    posts: any
}

const FeedBoxPresenter: React.FC<IProps> = ({ posts }) => {
    return (
        <S.Container>
            <S.Header>
                image
                <S.UserCol>
                    <Link to="/"><span style={{ fontWeight: 600 }}>username</span></Link>
                    <S.Location>location</S.Location>
                </S.UserCol>
            </S.Header>
            <S.Images>
                <S.Image url="/" showing={false}></S.Image>
            </S.Images>
            <S.Meta>
                <S.Buttons>
                    <S.Button>like</S.Button>
                    <S.Button>Comment</S.Button>
                </S.Buttons>
                <span style={{ fontWeight: 600 }}>like count</span>
                <S.Caption>
                    <span style={{ fontWeight: 600 }}>username</span> caption
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