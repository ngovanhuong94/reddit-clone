import styled, { css } from 'styled-components'


const StyledSection = styled.section`
    background: ${props => props.theme.lightColor};

    ${props => props.padded && css`padding: 32px;`};
`


export default StyledSection