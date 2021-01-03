import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { FacebookConnect, FacebookConnectVariables, GoogleConnect, GoogleConnectVariables } from '../../types/api'
import SocialLoginPresenter from './SocialLoginPresenter'
import { FACEBOOK_CONNECT, GOOGLE_CONNECT } from './SocialLoginQueries'

const SocialLoginContainer = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
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

    return (
        <SocialLoginPresenter
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setFbId={setFbId}
            setGoogleId={setGoogleId}
            FacebookLoginMutation={FacebookLoginMutation}
            GoogleLoginMutatation={GoogleLoginMutatation}

        />
    )
}

export default SocialLoginContainer