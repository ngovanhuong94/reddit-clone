import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Container from '../components/Container'
import Sidebar from '../containers/Sidebar'
import PostDetail from '../containers/PostDetail'
import PostList from '../containers/PostList'
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
`

const StyledMainSection = styled.div`
    flex: 1 0 auto;
    height: 400px;
`

class Home extends React.Component {
    render () {
        return (
            <StyledContainer>
                <StyledMainSection>
                    <Route exact path="/" component={PostList} />
                    <Route 
                        exact 
                        path="/c/:category"
                        render={({ match }) => <PostList category={match.params.category} />}
                    />
                    <Route 
                        exact
                        path="/u/:username"
                        render={({ match }) => <PostList username={match.params.username}/>}
                    />
                    <Route 
                        exact
                        path="/c/:category/:post"
                        render={({ match, history }) => <PostDetail id={match.params.post} history={history}/>}
                    />
                </StyledMainSection>
                <Sidebar />
            </StyledContainer>
        )
    }
}

export default Home