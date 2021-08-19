import styled from 'styled-components'


export const LaunchAnalyticsWrapper = styled.div`
    /* border:5px solid red; */
    flex:2;
    display:grid;
    grid-template-rows:repeat(3,400px);
    grid-template-columns:1fr;
    row-gap:16px;
    /* overflow-y:hidden; */

    @media (min-width:968px){
        grid-template-columns:repeat(3,1fr);
        /* grid-template-areas :'map barChart launch-timeline'; */
        grid-template-rows:100%; 
    }
`

