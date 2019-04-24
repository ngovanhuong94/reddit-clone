import styled, { css } from 'styled-components'


const StyledSmall = styled.small`
    font-size: ${props => props.theme.small};
    ${props => props.error && css`color: ${props => props.theme.errorText}`};
`

export default StyledSmall