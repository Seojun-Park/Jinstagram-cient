import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { ME } from '../../sharedquaries';
import { Me, GetChatRoom, GetChatRoomVariables } from '../../types/api';
import ChatPresenter from './ChatPresenter'
import { GET_CHAT_ROOM } from './ChatQueries';
import * as S from './ChatStyles'

interface IProps extends RouteComponentProps {
    match: any
}

const ChatContainer: React.FC<IProps> = ({ match: { params } }) => {
    const { chatId } = params
    const [me, setMe] = useState<any>()
    const [chat, setChat] = useState<any>()
    useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me
            if (ok && user) {
                setMe(user);
            } else {
                console.log(err)
            }
        }
    })
    const { loading } = useQuery<GetChatRoom, GetChatRoomVariables>(GET_CHAT_ROOM, {
        variables: {
            chatId: parseInt(chatId)
        },
        onCompleted: ({ GetChatRoom }) => {
            const { ok, err, chat } = GetChatRoom;
            if (ok && chat) {
                setChat(chat);
            } else {
                console.log(err)
            }
        }
    })

    console.log(chat)

    if (loading || !me || !chat) {
        return (
            <S.LoadingWrapper>
                <Loader />
            </S.LoadingWrapper>
        )
    } else {
        return (
            <ChatPresenter
                me={me}
            />
        )
    }
}
export default ChatContainer