import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { ME } from '../../sharedquaries'
import { Me } from '../../types/api'
import HomePresenter from './HomePresenter'


const HomeContainer = () => {
    const [me, setMe] = useState()

    const { loading, error } = useQuery<Me>(ME, {
        onCompleted: ({ Me }) => {
            console.log(Me)
        }
    })
    console.log(error)
    return (
        <HomePresenter />
    )
}

export default HomeContainer