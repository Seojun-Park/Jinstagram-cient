import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_CHAT } from '../../sharedquaries';
import { GetChat } from '../../types/api'
import * as S from './ChatPopupStyles'

interface IProps {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    me: any
}

const ChatPopupPresenter: React.FC<IProps> = ({ setPopup, me }) => {
    const [chatList, setChatList] = useState<any>();
    const { loading } = useQuery<GetChat>(GET_CHAT, {
        onCompleted: ({ GetChat }) => {
            const { ok, err, chat } = GetChat;
            if (ok && chat) {
                setChatList(chat)
            } else {
                console.log(err)
            }
        }
    })
    useEffect(() => {
        const clicked = () => {
            setPopup(false)
        }
        document.addEventListener("click", clicked);
        return () => document.removeEventListener("click", clicked)
    }, [setPopup])
    if (loading) {
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
                    {chatList && chatList.length === 0 ? "You don't have any chats"
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
                        })}
                </S.PopupBody>
            </S.Container>
        )
    }
}

export default ChatPopupPresenter