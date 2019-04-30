import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCreatePostLink = styled(Link)`
    display: block;
    padding: 4px 8px;
    color: ${props => props.theme.lightColor};
    background: ${props => props.theme.linkText};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    width: 100%
`

const CreatePostButton = (props) => <StyledCreatePostLink to="/create-post" {...props}>Create Post</StyledCreatePostLink>

export default CreatePostButton