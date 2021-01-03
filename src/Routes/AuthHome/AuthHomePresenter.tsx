import React, { FC, ReactElement } from 'react'
import Footer from '../../Components/Footer'
import Helmet from 'react-helmet'
import logo from '../../Asset/logo.png'
import * as S from './AuthStyles'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

interface IProps {
    action: string
    setAction: React.Dispatch<React.SetStateAction<string>>
    email: string
    emailChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: any
    secret: string
    secretChange: (
        e: React.ChangeEvent<HTMLInputElement>) => void
    setGoogleId: React.Dispatch<React.SetStateAction<string>>
    setFbId: React.Dispatch<React.SetStateAction<string>>
    setProfilePhoto: React.Dispatch<React.SetStateAction<string>>
    setSocialEmail: React.Dispatch<React.SetStateAction<string>>
    setLastName: React.Dispatch<React.SetStateAction<string>>
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    FacebookLoginMutation: any
    GoogleLoginMutatation: any
}

const AuthHomePresenter: FC<IProps> = ({
    action,
    setAction,
    email,
    emailChange,
    onSubmit,
    setGoogleId,
    setFbId,
    setProfilePhoto,
    setSocialEmail,
    setLastName,
    setFirstName,
    FacebookLoginMutation,
    GoogleLoginMutatation
}): ReactElement => {
    const responseFromFacebook = (response: any): any => {
        const { name, email, userID, picture }: any = response
        setFirstName(name.split(" ")[0])
        setLastName(name.split(" ")[name.split(" ").length - 1])
        setSocialEmail(email)
        setFbId(userID)
        setProfilePhoto(picture.data.url)
        FacebookLoginMutation();

    }
    const responseFromGoogle = (response: any): any => {
        const { email, familyName, givenName, googleId } = response.profileObj
        setFirstName(givenName)
        setLastName(familyName)
        setGoogleId(googleId)
        setSocialEmail(email)
        GoogleLoginMutatation();
    }
    return (
        <S.Wrapper>
            <Helmet><title>Auth | Jinstagram</title></Helmet>
            <S.Container>
                <S.Head>
                    <S.Logo src={logo} alt="logo" />
                    {action === "login" && <S.Title>Login</S.Title>}
                </S.Head>
                {action === "login" &&
                    <S.Mid>
                        <S.Form onSubmit={onSubmit}>
                            <S.Input
                                placeholder="Email"
                                value={email}
                                onChange={emailChange}
                                autoFocus={true}
                            />
                            <S.Button>Login</S.Button>
                        </S.Form>
                        <S.Signup>Don't have an account? </S.Signup>
                        <S.Link onClick={() => setAction("signup")}>Sign Up</S.Link>
                    </S.Mid>
                }
                <S.Bot>
                    <FacebookLogin
                        appId="306360554149080"
                        autoLoad={true}
                        fields="name, email,picture"
                        callback={responseFromFacebook}
                    />
                    <GoogleLogin
                        render={renderProps => (
                            <S.SocialButton onClick={renderProps.onClick} disabled={renderProps.disabled}>login with facebook</S.SocialButton>
                        )}
                        clientId="653597209706-g73v027q056idqi93oetg0bp8k1s3vtd.apps.googleusercontent.com"
                        onSuccess={responseFromGoogle}
                        onFailure={responseFromGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                </S.Bot>
            </S.Container>
            <Footer />
        </S.Wrapper>
    )
}

export default AuthHomePresenter