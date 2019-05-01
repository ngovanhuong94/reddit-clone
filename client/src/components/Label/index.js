import styled from 'styled-components'

const StyledLabel = styled.label`
    display: block;
    width: 100%;
    font-size: ${props => props.theme.fontSizeSmall};
    color: ${props => props.theme.bodyText};
    margin-bottom: 3px;
    text-transform: uppercase;
    font-weight: 400;
`


export default StyledLabel