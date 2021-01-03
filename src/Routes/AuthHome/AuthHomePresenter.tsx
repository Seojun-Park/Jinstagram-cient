import React, { FC } from 'react'
import Footer from '../../Components/Footer'
import Helmet from 'react-helmet'
import logo from '../../Asset/logo.png'
import * as S from './AuthStyles'

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
}

const AuthHomePresenter: FC<IProps> = ({
    action,
    setAction,
    email,
    emailChange,
    onSubmit
}) => {
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
                        <>
                            Don't have an account?{"   "}
                            <S.Link onClick={() => setAction("signup")}>Sign Up</S.Link>
                        </>
                    </S.Mid>
                }
                <S.Bot>
                    <>
                    </>
                </S.Bot>
            </S.Container>
            <Footer />
        </S.Wrapper>
    )
}

export default AuthHomePresenter