import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { SideBarWrapper, MenuItem, MenuList } from './syles'

const SideBar = () => {
    return (
        <Router>
            <SideBarWrapper>
                <MenuList>
                    <MenuItem primary={true}><Link href='#'>Home</Link></MenuItem>
                    <MenuItem><Link to='/'>LaunchPad</Link></MenuItem>
                </MenuList>
            </SideBarWrapper>
        </Router>
    )
}

export default SideBar
