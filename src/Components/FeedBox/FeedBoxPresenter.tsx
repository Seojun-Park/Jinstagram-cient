import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './FeedBoxStyles'

const FeedBoxPresenter = () => {
    return (
        <S.Container>
            <S.Header>
                image
                <S.UserCol>
                    <Link to="/">username</Link>
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
                like count
                <S.Caption>
                    caption
                </S.Caption>
                <S.Comments>
                    <S.Comment>
                        comment
                    </S.Comment>
                </S.Comments>
                <S.Timestamp>created at</S.Timestamp>
                <S.Textarea />
            </S.Meta>
        </S.Container>
    )
}

export default FeedBoxPresenter