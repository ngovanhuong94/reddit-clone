import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Container from '../../components/Container'
import Menu from '../../components/Menu'

const StyledNav = styled.nav`
    background: ${props => props.theme.lightColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 50px;
`

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 8px 16px;
    font-weight: bold;
    text-transform: uppercase;
    &.active {
        color: ${props => props.theme.linkText};
    }
`

class Header extends React.Component {
    render () {
        return (
            <StyledNav>
                <StyledContainer>
                    <Menu>
                        <Menu.Item>
                            <StyledNavLink to="/">Huong</StyledNavLink>
                        </Menu.Item>
                    </Menu>
                    <Menu>
                        <Menu.Item>
                            <StyledNavLink to="/login">Login</StyledNavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <StyledNavLink to="/register">Register</StyledNavLink>
                        </Menu.Item>
                    </Menu>
                </StyledContainer>
            </StyledNav>
        )
    }
}

export default Header