import React from 'react'
import styled from 'styled-components'


const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 6px;
    outline: none;
    border: 1px solid ${props => props.theme.bodyText};
    border-radius: ${props => props.theme.borderRadius};

    &:focus {
        border: 1px solid ${props => props.theme.linkText};
    }
`


export default StyledTextarea
