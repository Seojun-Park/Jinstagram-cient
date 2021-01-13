import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { ME, SEE_USER } from '../../sharedquaries'
import {
    Me,
    SeeUser,
    SeeUserVariables,
    ToggleFollowing,
    ToggleFollowingVariables,
    CreateChat,
    CreateChatVariables
} from '../../types/api'
import ProfilePresenter from './ProfilePresenter'
import { CREATE_CHAT, TOGGLE_FOLLOWING } from './ProfileQueries'

interface IRouteParam {
    username: string
}

interface IProps extends RouteComponentProps<IRouteParam> {
}

const ProfileContainer: React.FC<IProps> = ({ match: { params } }) => {
    const { username } = params;
    const [isMe, setIsMe] = useState<boolean>(false)
    const [me, setMe] = useState<any>()
    const [user, setUser] = useState<any>()
    const [followingS, setFollowingS] = useState<boolean | null | undefined>();
    const [popup, setPopup] = useState<boolean>(false)
    const [chatPopup, setChatPopup] = useState<boolean>(false);
    useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me;
            if (ok && user) {
                setMe(user);
            } else {
                console.log(err);
            }
        }
    })
    const { loading } = useQuery<SeeUser, SeeUserVariables>(SEE_USER, {
        variables: {
            username
        },
        onCompleted: ({ SeeUser }) => {
            const { ok, err, user } = SeeUser;
            if (ok && user) {
                setUser(user);
                setFollowingS(user.isFollowing);
            } else {
                console.log(err);
            }
        }
    })

    const [ToggleFollowingMutation] = useMutation<ToggleFollowing,
        ToggleFollowingVariables>(TOGGLE_FOLLOWING, {
            onCompleted: ({ ToggleFollowing }) => {
                const { ok, err } = ToggleFollowing;
                if (ok) {
                    setFollowingS(followingS ? false : true)
                } else {
                    console.log(err);
                }
            }
        })

    const [CreateChatMutation] = useMutation<CreateChat, CreateChatVariables>(CREATE_CHAT, {
        onCompleted: ({ CreateChat }) => {
            const { ok, err, chat } = CreateChat;
            if (ok) {
                if (chat) {
                    console.log(chat)
                }
            } else {
                console.log(err)
            }
        }
    })

    const FollowingHandler = (username: string) => {
        ToggleFollowingMutation({
            variables: {
                username
            },
        })
    }

    const ChatHandler = async () => {
        console.log("came")
        await CreateChatMutation({
            variables: {
                toId: user.id
            }
        })
    }

    useEffect(() => {
        if (me && user) {
            if (me.id === user.id) {
                setIsMe(true);
            } else {
                setIsMe(false);
            }
        }
    }, [me, user, setIsMe])

    if (loading || !user || !me) {
        return (
            <>
                loading...
            </>
        )
    }

    return (
        <ProfilePresenter
            me={me}
            user={user}
            FollowingHandler={FollowingHandler}
            followingS={followingS}
            isMe={isMe}
            popup={popup}
            setPopup={setPopup}
            chatPopup={chatPopup}
            setChatPopup={setChatPopup}
            ChatHandler={ChatHandler}
        />
    )
}

export default ProfileContainer;