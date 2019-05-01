import styled from 'styled-components'


const StyledSelect = styled.select`
    width: 100%;
    border: 1px solid ${props => props.theme.bodyText};
    border-radius: ${props => props.theme.borderRadius};
`


export default StyledSelect