import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    outline: none;
    padding: 6px;
    border: 1px solid ${props => props.theme.bodyText};
    border-radius: ${props => props.theme.borderRadius};

    &:focus {
        border: 1px solid ${props => props.theme.linkText};
    }
`


export default StyledInput