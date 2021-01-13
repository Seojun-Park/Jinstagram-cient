import React from 'react'
import * as S from './ProfileStyles'
import Header from '../../Components/Header'
import { HeartFull, Message, Settings } from '../../Components/Icon'
import PopUp from '../../Components/PopUp'
import { userLogOut } from '../../Apollo/authResolvers'

interface IProps {
    me: any
    user: any
    FollowingHandler: (username: string) => void
    followingS: boolean | null | undefined
    isMe: boolean
    popup: boolean
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePresenter: React.FC<IProps> = ({
    me,
    user,
    FollowingHandler,
    followingS,
    isMe,
    popup,
    setPopup
}) => {
    console.log(user);
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} />
            <S.Container>
                <S.UserDetail>
                    <S.Row>
                        <S.UserDetailCol>
                            <S.Profile src={user.profilePhoto} alt={"ProfilePhoto"} />
                        </S.UserDetailCol>
                        <S.UserDetailCol>
                            <S.UserDetailRow>
                                <S.Username>{user.username}</S.Username>
                                {isMe ? "" : <Message />}
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                {user.firstName} {user.lastName}
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                {user.email}
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                {isMe ? <S.FollowingButton onClick={() => setPopup(true)}>Setting</S.FollowingButton>
                                    :
                                    <S.FollowingButton onClick={() => FollowingHandler(user.username)}>{followingS ? "UNFOLLOW" : "FOLLOW"}</S.FollowingButton>
                                }
                                {popup && <PopUp setPopup={setPopup} me={me} />}
                            </S.UserDetailRow>
                        </S.UserDetailCol>
                    </S.Row>
                    <S.Row>
                        <S.UserDetailCol>
                            <S.Intro>{user.intro}</S.Intro>
                        </S.UserDetailCol>
                        {isMe ?
                            <S.UserDetailCol><S.LogoutButton onClick={() => userLogOut()}>Logout</S.LogoutButton></S.UserDetailCol>
                            :
                            <S.UserDetailCol> </S.UserDetailCol>
                        }
                    </S.Row>
                </S.UserDetail>
                <S.UserPosts>
                    {user.posts && user.posts.length === 0 && "You have no post"}
                    {user.posts && user.posts.map((post: any, index: number) => {
                        return (
                            <S.PostContainer key={index} bg={post.images[0].url}>
                                <S.PostOverlay>
                                    <HeartFull />
                                </S.PostOverlay>
                            </S.PostContainer>
                        )
                    })}
                </S.UserPosts>
            </S.Container>
        </S.Wrapper>
    )
}

export default ProfilePresenter