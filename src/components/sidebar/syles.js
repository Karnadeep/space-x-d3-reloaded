import styled, { css } from 'styled-components'

export const SideBarWrapper = styled.div`
    grid-area:sidebar;
    /* border:1px solid blue; */
    display:none;
    box-sizing:border-box;

    @media(min-width:1180px){
        display:unset;
    }
`
export const MenuList = styled.ul`
    list-style:none;
    margin:0px;
    padding:0px;
    box-sizing:border-box;
`

export const MenuItem = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:8px;
    padding:8px;
    background-color:#4285F4;
   
    border-radius:20px;
    
    a{
        text-decoration:none;
        color:white;
    }
    :active{
        background-color:#000087;
    }
    
    ${(props) => (props.primary && css`
        background-color:#000087;
    `)}
`

