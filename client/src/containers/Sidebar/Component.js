import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Section from '../../components/Section'
import CreatePostButton from './CreatePostButton'
import categories from '../../categories'
const StyledDiv = styled.div`
    width: 250px;
`

const StyledCategoryLink = styled(Link)`
    display: block;
    width: 100%;
    text-decoration: none;
    padding: 4px 8px;
`


class Sidebar extends React.Component {
    render () {
        const { token } = this.props 
        return (
            <StyledDiv>
                <Section padded>
                    { token && <CreatePostButton /> }
                    {categories.map(cat => (<StyledCategoryLink 
                                                    to="/" 
                                                    key={cat.value}>
                                                {cat.text}
                                            </StyledCategoryLink>))}
                </Section>
            </StyledDiv>
        )
    }
}


export default Sidebar