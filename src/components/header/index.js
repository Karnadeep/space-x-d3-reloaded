import React from 'react'
import { HeaderWrapper, SideMenuButton, SideMenuIcon, AppInfo, UserInfo, ProfilePhoto, ProfileWrapper, ProfileName, HambergerIcon } from './styles'
import Sapce from '../../images/space.png'
import Profile from '../../images/profile.jpeg'
import Prfile2 from '../../images/profile2.jpeg'
import Hamberger from '../../images/hamberger.png'
import SideBarMenu from '../../images/sidebar-menu.png'

const Header = () => {
    return (
        <HeaderWrapper>
            <SideMenuButton href="#" onClick={() => alert("hello")}><SideMenuIcon alt="sidebar-meu-icon" src={SideBarMenu} /></SideMenuButton>
            <AppInfo>
                <img alt="sapce-x" src={Sapce} />
                <h2>Space-X</h2>
            </AppInfo>
            <UserInfo>
                {/* <ProfileWrapper> */}
                <ProfilePhoto alt="profile-pic" src={Prfile2} />
                {/* </ProfileWrapper> */}
                <ProfileName>Karnadeep Rana</ProfileName>
            </UserInfo>
            <HambergerIcon alt="hamberger icon" src={Hamberger} />
        </HeaderWrapper>
    )
}

export default Header
