import React, { useEffect } from 'react';
import * as S from './ChatPopupStyles'

interface IProps {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    me: any
}

const ChatPopupPresenter: React.FC<IProps> = ({ setPopup, me }) => {
    useEffect(() => {
        const clicked = () => {
            setPopup(false)
        }
        document.addEventListener("click", clicked);
        return () => document.removeEventListener("click", clicked)
    }, [setPopup])
    if (!me) {
        return (
            <>
                loading
            </>
        )
    }
    else {
        return (
            <S.Container>
                <S.Headbar>
                    <S.TitleDiv>
                    </S.TitleDiv>
                    <S.Title>Chat List</S.Title>
                    <S.ExitButton onClick={() => setPopup(false)}>X</S.ExitButton>
                </S.Headbar>
                <S.PopupBody>
                    <S.ChatRow>
                        {me.chatFrom && me.chatFrom.length === 0 ? <S.ChatInfo>You haven't received any message yet</S.ChatInfo>
                            : me.chatFrom && me.chatFrom.map((chat: any, index: number) => {
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
                            })}
                    </S.ChatRow>
                    <S.ChatRow>
                        {me.chatTo && me.chatTo.length === 0 ? <S.ChatInfo>You haven't sent any message yet</S.ChatInfo>
                            : me.chatTo && me.chatTo.map((chat: any, index: number) => {
                                return (
                                    <S.ExtendedLink key={index} to={`/chat/${chat.id}`}>
                                        <S.Row>
                                            <S.ProfileImage src={chat.from.profilePhoto} alt={"to"} />
                                            <S.SmallRow>
                                                <S.RowUsername>From : {chat.from.username}</S.RowUsername>
                                                {chat.messages && chat.messages.length !== 0 ?
                                                    <S.RowMessage>{chat.messages[chat.messages.length - 1].user.username} : {chat.messages[chat.messages.length - 1].text}</S.RowMessage> :
                                                    <S.RowMessage>No message</S.RowMessage>
                                                }
                                            </S.SmallRow>
                                        </S.Row>
                                    </S.ExtendedLink>
                                )
                            })}
                    </S.ChatRow>
                </S.PopupBody>
            </S.Container>
        )
    }
}

export default ChatPopupPresenter