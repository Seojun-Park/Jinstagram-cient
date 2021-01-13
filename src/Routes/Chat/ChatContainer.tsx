import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ME } from '../../sharedquaries';
import { Me } from '../../types/api';
import ChatPresenter from './ChatPresenter'

interface IProps extends RouteComponentProps {
    match: any
}

const ChatContainer: React.FC<IProps> = ({ match }) => {
    console.log(match)
    const [me, setMe] = useState<any>()
    const { loading } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me
            if (ok && user) {
                setMe(user);
            } else {
                console.log(err)
            }
        }
    })
    if (loading || !me) {
        return (
            <>
                Loading
            </>
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