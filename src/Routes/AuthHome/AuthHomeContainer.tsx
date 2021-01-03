
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'
import { FacebookConnect, FacebookConnectVariables, GoogleConnect, GoogleConnectVariables } from '../../types/api'
import AuthHomePresenter from './AuthHomePresenter'
import { FACEBOOK_CONNECT, GOOGLE_CONNECT } from './AuthHomeQueries'

const AuthHomeContainer = () => {
    const [email, emailChange] = useInput("")
    const [secret, secretChange] = useInput("")
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
                email,
                fbId
            },
            onCompleted: ({ FacebookConnect: result }) => {
                const { ok, err, token } = result
                if (ok) {
                    if (token) {
                        console.log(token)
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
                email,
                googleId
            },
            onCompleted: ({ GoogleConnect: result }) => {
                const { ok, err, token } = result;
                if (ok) {
                    if (token) {
                        console.log(token)
                    }
                } else {
                    console.log(err)
                }
            }
        }
        )

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (action === "login") {
            if (email !== "") {
                console.log(email)
            }
        } else if (action === "confirm") {
            if (secret !== "") {
                console.log(secret)
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
        />
    )
}

export default AuthHomeContainer