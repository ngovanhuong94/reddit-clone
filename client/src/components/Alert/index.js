import styled from 'styled-components'

const StyledAlert = styled.div`
    text-align: center;
    font-size: ${props => props.theme.fontSizeNormal};
    color: ${props => props.theme.errorText};
    margin-bottom: 5px;
`

export default StyledAlert