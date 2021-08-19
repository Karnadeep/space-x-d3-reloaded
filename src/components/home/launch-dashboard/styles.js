import styled from 'styled-components'


export const LaunchDashboardWrapper = styled.div`
    /* border:10px solid yellow; */
    flex:1;
    margin-top:24px;
    box-sizing:border-box;
`

export const LDLabel = styled.label` 
    margin:12px;
    font-size:24px;
`

export const Launches = styled.div` 
    /* border:10px solid black; */
    margin-top:24px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    /* grid-template-rows:1fr; */
    grid-template-rows:120px;
    column-gap:0px;

    @media(min-width:376px){
        column-gap:8px;
    }
    @media(min-width:660px){
        column-gap:16px;
    }
`
export const LaunchCard = styled.div` 
    border:1px solid black;
    /* grid-area:upcoming; */
    border-radius:24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const LaunchCount = styled.h3`
    border:1px solid blue;
    margin-bottom:4px;
 `

export const LaunchLabel = styled.h3`
     border:1px solid green;
     display:flex;
     justify-content:center;
    margin-top:4px;
    font-size:10px; 


    @media(min-width:376px){
        font-size:12px;
    }
     @media(min-width:640px){
        font-size: medium
    } 
   
`
