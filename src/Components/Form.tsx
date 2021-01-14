import React from 'react'
import styled from 'styled-components'

interface IProps {
    submitFn?: any
}

const StyledForm = styled.form`
border-top: 2px solid #ccc;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 `;

const Form: React.FC<IProps> = ({ submitFn, children }) => {
    return (
        <StyledForm onSubmit={event => {
            event.preventDefault()
            submitFn();
        }}>
            {children}
        </StyledForm>
    )
}

export default Form