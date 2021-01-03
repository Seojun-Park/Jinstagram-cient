import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'
import AuthHomePresenter from './AuthHomePresenter'

const AuthHomeContainer = () => {
    const [email, emailChange] = useInput("")
    const [secret, secretChange] = useInput("")
    const [action, setAction] = useState<any>("login")

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
        />
    )
}

export default AuthHomeContainer