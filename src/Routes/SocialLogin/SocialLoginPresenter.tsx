import React, { FC } from 'react'

interface IProps {
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    setLastName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setFbId: React.Dispatch<React.SetStateAction<string>>
    setGoogleId: React.Dispatch<React.SetStateAction<string>>
    FacebookLoginMutation: any
    GoogleLoginMutatation: any
}

const SocialLoginPresenter: FC<IProps> = ({
    setFirstName,
    setLastName,
    setEmail,
    setFbId,
    setGoogleId,
    FacebookLoginMutation,
    GoogleLoginMutatation
}) => {
    return (
        <>
            Social
        </>
    )
}

export default SocialLoginPresenter