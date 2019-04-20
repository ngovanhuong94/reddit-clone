import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justfy-content: space-around;
    list-style-type: none;
`
Menu.Item = MenuItem

export default Menu