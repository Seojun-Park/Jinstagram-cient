import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import useInput from '../../Hooks/useInput'
import { ME, SEE_USER } from '../../sharedquaries'
import { Me, SeeUser, SeeUserVariables, ToggleFollowing, ToggleFollowingVariables } from '../../types/api'
import ProfilePresenter from './ProfilePresenter'
import { TOGGLE_FOLLOWING } from './ProfileQueries'

interface IRouteParam {
    username: string
}

interface IProps extends RouteComponentProps<IRouteParam> {
}

const ProfileContainer: React.FC<IProps> = ({ match: { params } }) => {
    const { username } = params;
    const [term, termChange] = useInput("")
    const [me, setMe] = useState<any>()
    const [user, setUser] = useState<any>()
    const [followingS, setFollowingS] = useState<boolean | null | undefined>();
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

    const FollowingHandler = (username: string) => {
        ToggleFollowingMutation({
            variables: {
                username
            },
        })
    }

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
            term={term}
            termChange={termChange}
            FollowingHandler={FollowingHandler}
            followingS={followingS}
        />
    )
}

export default ProfileContainer;