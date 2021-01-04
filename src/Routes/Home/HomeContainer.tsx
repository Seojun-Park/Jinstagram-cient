import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { ME } from '../../sharedquaries'
import { Me } from '../../types/api'
import HomePresenter from './HomePresenter'


const HomeContainer = () => {
    const [me, setMe] = useState<any>()

    const { loading, error } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            const { ok, err, user } = Me
            if (ok && user) {
                setMe(user);
            }
        }
    })

    if (loading) {
        return (<>Loading...</>)
    }
    return (
        <HomePresenter me={me} />
    )
}

export default HomeContainer