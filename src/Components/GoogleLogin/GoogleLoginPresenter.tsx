import React, { FC } from 'react'
import GoogleLogin from 'react-google-login'

interface IProps {
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFbId: React.Dispatch<React.SetStateAction<string>>,
    googleMutation: any
}

const GoogleLoginPresenter: FC<IProps> = ({
    googleMutation,
    setFbId,
    setEmail,
    setLastName,
    setFirstName
}) => {
    const responseGoogle = (response: any) => {
        console.log(response)
    }
    return (
        <>
            <GoogleLogin
                clientId="653597209706-g73v027q056idqi93oetg0bp8k1s3vtd.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </>
    )
}

export default GoogleLoginPresenter