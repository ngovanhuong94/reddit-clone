import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    flex: 1 0 auto;
    height: 400px;
`

class ListPosts extends React.Component {
    render () {
        return (
            <StyledDiv>
                This is ListPosts Component
            </StyledDiv>
        )
    }
}

export default ListPosts