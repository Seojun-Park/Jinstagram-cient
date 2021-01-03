import React, { FC } from 'react'
import FacebookLogin from 'react-facebook-login'

interface IProps {
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFbId: React.Dispatch<React.SetStateAction<string>>,
    fbMutation: any
}

const FacebookLoginPresenter: FC<IProps> = ({
    setFirstName,
    setLastName,
    setEmail,
    setFbId,
    fbMutation
}) => {
    const responseFacebook = ({ name, email, userID }: any) => {
        setFirstName(name.split(" ")[0])
        setLastName(name.split(" ")[name.split(" ").length - 1])
        setEmail(email)
        setFbId(userID)
        fbMutation();
    }
    return (
        <>
            <FacebookLogin
                appId="306360554149080"
                autoLoad={true}
                fields="name, email,picture"
                callback={responseFacebook}
            />
        </>

    )
}

export default FacebookLoginPresenter