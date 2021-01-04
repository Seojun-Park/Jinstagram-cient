
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { userLogIn } from '../../Apollo/authResolvers'
import useInput from '../../Hooks/useInput'
import { ConfirmSecret, ConfirmSecretVariables, CreateAccount, CreateAccountVariables, FacebookConnect, FacebookConnectVariables, GoogleConnect, GoogleConnectVariables, RequestCode, RequestCodeVariables } from '../../types/api'
import AuthHomePresenter from './AuthHomePresenter'
import { CONFIRM_SECRET, CREATE_ACCOUNT, FACEBOOK_CONNECT, GOOGLE_CONNECT, REQUEST_CODE } from './AuthHomeQueries'

const AuthHomeContainer = () => {
    const [email, emailChange] = useInput("")
    const [secret, secretChange] = useInput("")
    const [username, setUserName] = useInput("")
    const [intro, setIntro] = useInput("")
    const [signUpFirstName, setSignUpFirstName] = useInput("")
    const [signUpLastName, setSignUpLastName] = useInput("")
    const [action, setAction] = useState<any>("login")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [socialEmail, setSocialEmail] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")
    const [fbId, setFbId] = useState("")
    const [googleId, setGoogleId] = useState("")
    const [FacebookLoginMutation] = useMutation<FacebookConnect,
        FacebookConnectVariables>(FACEBOOK_CONNECT, {
            variables: {
                firstName,
                lastName,
                email: socialEmail,
                fbId,
                profilePhoto
            },
            onCompleted: ({ FacebookConnect: result }) => {
                const { ok, err, token } = result
                if (ok) {
                    if (token) {
                        userLogIn(token)
                    }
                } else {
                    console.log(err)
                }
            }
        })

    const [GoogleLoginMutatation] = useMutation<GoogleConnect,
        GoogleConnectVariables>(
            GOOGLE_CONNECT, {
            variables: {
                firstName,
                lastName,
                email: socialEmail,
                googleId
            },
            onCompleted: ({ GoogleConnect: result }) => {
                const { ok, err, token } = result;
                if (ok) {
                    if (token) {
                        userLogIn(token)
                        toast.success("Connected")
                    }
                } else {
                    console.log(err)
                }
            }
        }
        )

    const [CreateAccountMutation] = useMutation<CreateAccount,
        CreateAccountVariables>(
            CREATE_ACCOUNT, {
            variables: {
                firstName: signUpFirstName,
                lastName: signUpLastName,
                email,
                intro,
                username
            }, onCompleted: ({ CreateAccount }) => {
                const { ok, err } = CreateAccount;
                if (ok) {
                    toast.success("Account created!, now login")
                    setTimeout(() => setAction("login"), 2000)
                } else if (err) {
                    toast.error(err)
                }
            }
        })

    const [RequestCodeMutation] = useMutation<RequestCode, RequestCodeVariables>(
        REQUEST_CODE, {
        variables: {
            email
        }, onCompleted: ({ RequestCode }) => {
            const { ok, err } = RequestCode;
            if (ok) {
                toast.success("Secret code sent to your email");
                setTimeout(() => setAction("confirm"), 2000)
            } else if (err) {
                toast.error(err)
            }
        }
    }
    )
    const [ConfirmSecretMutation] = useMutation<ConfirmSecret, ConfirmSecretVariables>(
        CONFIRM_SECRET, {
        variables: {
            email,
            code: secret
        }, onCompleted: ({ ConfirmSecret }) => {
            const { ok, err, token } = ConfirmSecret;
            if (ok && token) {
                userLogIn(token)
            } else {
                toast.error(err)
            }
        }
    }
    )


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (action === "login") {
            if (email !== "") {
                try {
                    const { data } = await RequestCodeMutation();
                    if (!data?.RequestCode) {
                        toast.error("You don't have an account yet. Sign up now");
                        setTimeout(() => setAction("signup"), 2000)
                    } else {
                        setAction("confirm")
                    }
                } catch {
                    toast.error("Requesting code is failed.")
                }
            } else {
                toast.error("Email is required")
            }
        } else if (action === "signup") {
            if (signUpFirstName !== ""
                && signUpLastName !== ""
                && username !== ""
                && email !== ""
                && intro !== "") {
                try {
                    const { data } = await CreateAccountMutation();
                    if (!data?.CreateAccount) {
                        toast.error("Can't create an account")
                    } else {
                        toast.success("Account Created! Log in now")
                        setTimeout(() => setAction("login"))
                    }
                } catch (err) {
                    toast.error(err.message)
                }
            } else {
                toast.error("all fields are required")
            }
        } else if (action === "confirm") {
            if (secret !== "") {
                try {
                    await ConfirmSecretMutation();
                } catch (err) {
                    toast.error(err)
                }
            }
        }
    }

    return (
        <AuthHomePresenter
            action={action}
            setAction={setAction}
            email={email}
            emailChange={emailChange}
            onSubmit={onSubmit}
            secret={secret}
            secretChange={secretChange}
            setGoogleId={setGoogleId}
            setFbId={setFbId}
            setProfilePhoto={setProfilePhoto}
            setSocialEmail={setSocialEmail}
            setLastName={setLastName}
            setFirstName={setFirstName}
            setUserName={setUserName}
            setIntro={setIntro}
            setSignUpFirstName={setSignUpFirstName}
            setSignUpLastName={setSignUpLastName}
            FacebookLoginMutation={FacebookLoginMutation}
            GoogleLoginMutatation={GoogleLoginMutatation}
            username={username}
            intro={intro}
            signUpFirstName={signUpFirstName}
            signUpLastName={signUpLastName}
        />
    )
}

export default AuthHomeContainer