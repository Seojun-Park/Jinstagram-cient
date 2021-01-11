import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { SEE_USER } from '../../sharedquaries'
import { SeeUser, SeeUserVariables } from '../../types/api'
import ProfilePresenter from './ProfilePresenter'

interface IRouteParam {
    username: string
}

interface IProps extends RouteComponentProps<IRouteParam> {
}

const ProfileContainer: React.FC<IProps> = ({ match: { params } }) => {
    const { username } = params;
    const [user, setUser] = useState<any>()
    const { loading } = useQuery<SeeUser, SeeUserVariables>(SEE_USER, {
        variables: {
            username
        },
        onCompleted: ({ SeeUser }) => {
            const { ok, err, user } = SeeUser;
            if (ok && user) {
                setUser(user);
            } else {
                console.log(err);
            }
        }
    })
    console.log(user)
    if (loading || !user) {
        return (
            <>
                loading...
            </>
        )
    }
    return (
        <ProfilePresenter />
    )
}

export default ProfileContainer;