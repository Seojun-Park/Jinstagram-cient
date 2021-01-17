import React, { useEffect } from 'react';
import * as S from './FollowPopupStyles'

interface IProps {
    setFollowPopup: React.Dispatch<React.SetStateAction<boolean>>
    user: any
    action: string
}

const FollowPopupPresenter: React.FC<IProps> = ({ setFollowPopup, user, action }) => {
    useEffect(() => {
        const clicked = () => {
            setFollowPopup(false)
        }
        document.addEventListener("click", clicked);
        return () => document.removeEventListener("click", clicked)
    }, [setFollowPopup])
    return (
        <S.Container>
            <S.Headbar>
                <S.TitleDiv>
                </S.TitleDiv>
                <S.Title>{action} List</S.Title>
                <S.ExitButton onClick={() => setFollowPopup(false)}>X</S.ExitButton>
            </S.Headbar>
            <S.PopupBody>
                {action === "following" && (
                    user.following && user.following.map((user: any, index: number) => {
                        return (
                            <S.ExtendedLink key={index} to={`/profile/${user.username}`}>
                                <S.ProfileImage src={user.profilePhoto} alt={"user"} />
                            </S.ExtendedLink>
                        )
                    })
                )}
                {action === "follower" && (
                    user.followers && user.followers.map((user: any, index: number) => {
                        return (
                            <S.ExtendedLink key={index} to={`/profile`}>
                                <S.ProfileImage src={user.profilePhoto} alt={"user"} />
                            </S.ExtendedLink>
                        )
                    })
                )}
                {/* {chatList && chatList.length === 0 ? "You don't have any chats"
                    : chatList && chatList.map((chat: any, index: number) => {
                        return (
                            <S.ExtendedLink key={index} to={`/chat/${chat.id}`}>
                                <S.Row>
                                    <S.ProfileImage src={chat.to.profilePhoto} alt={"to"} />
                                    <S.SmallRow>
                                        <S.RowUsername>To : {chat.to.username}</S.RowUsername>
                                        {chat.messages && chat.messages.length !== 0 ?
                                            <S.RowMessage>{chat.messages[chat.messages.length - 1].user.username} : {chat.messages[chat.messages.length - 1].text}</S.RowMessage> :
                                            <S.RowMessage>No message</S.RowMessage>
                                        }
                                    </S.SmallRow>
                                </S.Row>
                            </S.ExtendedLink>
                        )
                    })} */}
            </S.PopupBody>
        </S.Container>
    )
}

export default FollowPopupPresenter