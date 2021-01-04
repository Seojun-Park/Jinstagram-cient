import React from 'react'

interface IProps {
    me: object
}

const HomePresenter: React.FC<IProps> = ({ me }) => {
    console.log(me)

    return (
        <>
            home
        </>
    )
}

export default HomePresenter