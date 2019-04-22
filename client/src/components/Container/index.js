import React from 'react'
import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;

    ${props => props.small && css`width: 450px;`}
`


export default StyledContainer