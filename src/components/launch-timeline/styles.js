import styled from 'styled-components'

export const LTWrapper = styled.div`
    border:10px solid green;
    /* grid-area:launch-timeline; */
    padding:8px;
    overflow-y:hidden;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const LunchList = styled.div`
    /* border:10px solid red; */
    overflow-y:auto;
    box-sizing:border-box;
    height:370px;
    margin-top:10px;
 
`

export const LTTitle = styled.label`
    font-size:12px;
    font-weight:bold;
`

export const LaunchInfo = styled.div`
    /* display: flex; */
    gap:16px;
    align-items:center;
    margin-top:14px;
    padding:8px;
    border:1px solid black;
`
export const LaunchName = styled.label`
    font-size:24px;
`
export const LaunchStatus = styled.img`
    font-size:14px;  
`



