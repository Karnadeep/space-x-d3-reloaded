import styled from 'styled-components'


export const HeaderWrapper = styled.div`
    /* border:10px solid black; */
    background-color:#F6DDBD;
    grid-area:header;
    display:flex;
    /* justify-content:center; */
    align-items:center;
    padding:8px 16px;
    box-sizing:border-box;

    /* @media (min-width:968px){
        justify-content:flex-start;
    } */
`
export const AppInfo = styled.div`
    /* border:10px solid orange; */
    display:flex;
    gap:16px;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    margin-left:auto;

    @media(min-width:968px){
        margin-left:initial;
    }
   
    /* margin-right:auto; */
`


export const UserInfo = styled.div`
    /* border:10px solid orange; */
    display:flex;
    gap:16px;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    margin-left:auto;
`
export const ProfileWrapper = styled.div`
     /* border:1px solid black; */
      /* max-width:40px;
  height:40px; */
`

export const ProfilePhoto = styled.img`
border:2px solid black;
      max-width:40px;
  height:40px;
  object-fit:cover;
  border-radius:50%;

`

export const ProfileName = styled.h2`
 margin:0px;
 padding:0px;
 display:none;

 @media(min-width:968px){   
     display:unset;
    }
`

export const HambergerIcon = styled.img`
    margin-left:24px;
`

export const SideMenuButton = styled.a`
     /* border:1px solid black; */
      max-width:40px;
    height:40px;
    margin-right:50px;
    display:unset;
    box-sizing:border-box;

    @media(min-width:1180px){
        display:none;
    }
`
export const SideMenuIcon = styled.img`
      max-width:40px;
    height:40px;
    margin-right:50px;
    display:unset;
    object-fit:cover;

    @media(min-width:1180px){
        display:none;
    }
`
