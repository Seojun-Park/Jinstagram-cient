import { useMutation, useQuery, useSubscription } from '@apollo/client';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../../Components/Loader';
import useInput from '../../Hooks/useInput';
import { ME } from '../../sharedquaries';
import {
    Me,
    GetChatRoom,
    GetChatRoomVariables,
    MessageSubscription,
    SendMessage,
    SendMessageVariables
} from '../../types/api';
import ChatPresenter from './ChatPresenter'
import {
    GET_CHAT_ROOM,
    MESSAGE_SUBSCRIPTION,
    SEND_MESSAGE
} from './ChatQueries';
import * as S from './ChatStyles'

interface IProps extends RouteComponentProps {
    match: any
}

const ChatContainer: React.FC<IProps> = ({ match: { params } }) => {
    const { chatId } = params
    const [me, setMe] = useState<any>()
    const [message, onChangeMessage, setMessage] = useInput("")
    const [messages, setMessages] = useState<any[]>()
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
                if (chat.messages) {
                    const messages = chat.messages.map(msg => {
                        if (me && me.id && msg && msg.user && msg.user.id) {
                            return {
                                ...msg,
                                mine: me.id === msg.user.id
                            }
                        } else {
                            return null;
                        }
                    })
                    setMessages(messages)
                } else {
                    console.log("no messages")
                }
            } else {
                console.log(err)
            }
        }
    })

    useSubscription<MessageSubscription>(MESSAGE_SUBSCRIPTION, {
        onSubscriptionComplete: () => {
            console.log("Listening new messages");
        },
        onSubscriptionData: ({ subscriptionData }) => {
            const { data } = subscriptionData;
            console.log("subData", subscriptionData, "normal data:", data)
            if (data && messages && me) {
                setMessage("");
                const { MessageSubscription } = data;
                if (MessageSubscription) {
                    setMessages([...messages, {
                        ...MessageSubscription,
                        mine: me.id === MessageSubscription.user.id
                    }])
                }
            }
        }
    })

    const [SendMessageMutation] = useMutation<SendMessage, SendMessageVariables>(SEND_MESSAGE, {
        variables: {
            text: message,
            chatId: parseInt(chatId)
        }
        // ,
        // onCompleted: ({ SendMessage }) => {
        //     const { ok, err } = SendMessage;
        //     if (ok) {
        //         setMessage("")
        //     } else {
        //         console.log(err)
        //     }
        // }
    })

    if (loading || !me || !chat) {
        return (
            <S.LoadingWrapper>
                <Loader />
            </S.LoadingWrapper>
        )
    } else {
        return (
            <ChatPresenter
                chat={chat}
                me={me}
                messages={messages}
                message={message}
                onChangeMessage={onChangeMessage}
                SendMessageMutation={SendMessageMutation}
                chatId={parseInt(chatId)}
            />
        )
    }
}
export default ChatContainer