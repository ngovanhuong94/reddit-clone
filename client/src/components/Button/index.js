import styled from 'styled-components'


const StyledButton = styled.button`
    width: 70px;
    height: 30px;
    background: ${props => props.theme.linkText};
    border-radius: ${props =>props.theme.borderRadius};
    color: ${props => props.theme.lightColor};
    font-size: ${props => props.theme.fontSizeNormal};
    outline: none;
    border: none;
    cursor: pointer;
    align-self: flex-end;
`


export default StyledButton