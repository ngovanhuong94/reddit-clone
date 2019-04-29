import React from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Sidebar from '../containers/Sidebar'
import ListPosts from '../containers/Listposts'

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
`

class Home extends React.Component {
    render () {
        return (
            <StyledContainer>
                <ListPosts />
                <Sidebar />
            </StyledContainer>
        )
    }
}

export default Home