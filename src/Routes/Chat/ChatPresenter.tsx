import React, { useEffect, useRef } from "react";
import ChatMessage from "../../Components/ChatMessage";
import Header from '../../Components/Header'
import * as S from './ChatStyles'

interface IProps {
    me: any
    messages?: any[]
    message: string
    onChangeMessage: (event: React.ChangeEvent<Element>) => any;
    SendMessageMutation: any
    chatId: number
}

const renderMessage = (messages: any[]) => {
    return messages.map((msg: any, index: number) => {
        return <ChatMessage key={index} {...msg} />
    })
}

const ChatPresenter: React.FC<IProps> = ({ me,
    messages,
    message,
    onChangeMessage,
    SendMessageMutation,
    chatId
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref && ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages])
    return (
        <S.Wrapper>
            <Header url={me.profilePhoto} />
            <S.Container>
                <S.Head>Chat with oo</S.Head>
                <S.MessageBox ref={ref}>{messages && renderMessage(messages)}</S.MessageBox>
                <S.ExtendedForm submitFn={SendMessageMutation}>
                    <S.MessageInput
                        placeholder="Type message"
                        value={message}
                        onChange={onChangeMessage}
                    />
                </S.ExtendedForm>
            </S.Container>
        </S.Wrapper>
    )
};

export default ChatPresenter