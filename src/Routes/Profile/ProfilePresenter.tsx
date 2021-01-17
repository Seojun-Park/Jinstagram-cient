import React from 'react'
import * as S from './ProfileStyles'
import Header from '../../Components/Header'
import { HeartFull, Message } from '../../Components/Icon'
import PopUp from '../../Components/PopUp'
import { userLogOut } from '../../Apollo/authResolvers'
import ChatPopup from '../../Components/ChatPopup'
import FollowPopup from '../../Components/FollowPopup'

interface IProps {
    me: any
    user: any
    FollowingHandler: (username: string) => void
    followingS: boolean | null | undefined
    isMe: boolean
    popup: boolean
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    followPopup: boolean
    setFollowPopup: React.Dispatch<React.SetStateAction<boolean>>
    chatPopup: boolean
    setChatPopup: React.Dispatch<React.SetStateAction<boolean>>
    ChatHandler: any
    action: string
    setAction: React.Dispatch<React.SetStateAction<string>>
}

const ProfilePresenter: React.FC<IProps> = ({
    me,
    user,
    FollowingHandler,
    followingS,
    isMe,
    popup,
    setPopup,
    followPopup,
    setFollowPopup,
    chatPopup,
    setChatPopup,
    ChatHandler,
    action,
    setAction
}) => {
    const handleFollowPopup = (action: string) => {
        setAction(action)
        setFollowPopup(true);
    }
    console.log(me)
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
                                {isMe ?
                                    <>
                                        <S.Button onClick={() => setChatPopup(true)}>
                                            <Message />
                                        </S.Button>
                                        {chatPopup ? <ChatPopup setPopup={setChatPopup} me={me} /> : ""}
                                    </>
                                    :
                                    <S.Button onClick={ChatHandler}>
                                        <Message />
                                    </S.Button>
                                }
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                {user.firstName} {user.lastName}
                            </S.UserDetailRow>
                            <S.UserDetailRow>
                                {user.email}
                            </S.UserDetailRow>
                            <S.FollowRow>
                                <S.Button onClick={() => handleFollowPopup("follower")}>
                                    <S.FollowCol>
                                        <S.FollowTitle>
                                            Follower
                                    </S.FollowTitle>
                                        <S.FollowCount>
                                            {user.followers ? user.followers.length : "0"}
                                        </S.FollowCount>
                                    </S.FollowCol>
                                </S.Button>
                                {action !== "" && followPopup && <FollowPopup setFollowPopup={setFollowPopup} user={user} action={action} />}
                            </S.FollowRow>
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