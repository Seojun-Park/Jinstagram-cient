import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
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
    if (loading) {
        return (
            <>
                loading
            </>
        )
    }
    else {
        console.log(chatList)
        return (
            <S.Container>
                <S.Headbar>
                    <S.ExitButton onClick={() => setPopup(false)}>X</S.ExitButton>
                </S.Headbar>
                <S.PopupBody>
                    {chatList && chatList.length === 0 ? "You don't have any chats"
                        : chatList && chatList.map((chat: any, index: number) => {
                            return (
                                <S.Row key={index}>{chat.id}</S.Row>
                            )
                        })}
                </S.PopupBody>
            </S.Container>
        )
    }
}

export default ChatPopupPresenter