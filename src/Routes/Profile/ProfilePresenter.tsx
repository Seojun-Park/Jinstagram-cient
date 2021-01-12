import React from 'react'
import * as S from './ProfileStyles'
import Header from '../../Components/Header'

interface IProps {
    me: any
    user: any
    term: string
    termChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    FollowingHandler: (username: string) => void
    followingS: boolean | null | undefined
}

const ProfilePresenter: React.FC<IProps> = ({
    me,
    user,
    term,
    termChange,
    FollowingHandler,
    followingS
}) => {
    console.log(user);
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} term={term} termChange={termChange} />
            <S.Container>
                <S.UserDetail>
                    <S.Row>
                        <S.UserDetailCol>
                            <S.Profile src={user.profilePhoto} alt={"ProfilePhoto"} />
                        </S.UserDetailCol>
                        <S.UserDetailCol>
                            <S.UserDetailRow>
                                <S.Username>{user.username}</S.Username>
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                <S.FollowingButton onClick={() => FollowingHandler(user.username)}>{followingS ? "UNFOLLOW" : "FOLLOW"}</S.FollowingButton>
                            </S.UserDetailRow>
                        </S.UserDetailCol>
                    </S.Row>
                    <S.Row>
                        <S.Intro>{user.intro}</S.Intro>
                    </S.Row>
                </S.UserDetail>
                <S.UserPosts>
                    posts
                </S.UserPosts>
            </S.Container>
        </S.Wrapper>
    )
}

export default ProfilePresenter