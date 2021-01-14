import React from 'react'

interface IProps {
    submitFn?: any
}

const Form: React.FC<IProps> = ({ submitFn, children }) => {
    return (
        <form onSubmit={event => {
            event.preventDefault()
            submitFn();
        }}>
            {children}
        </form>
    )
}

export default Form