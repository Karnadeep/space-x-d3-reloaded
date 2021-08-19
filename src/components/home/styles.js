import styled from 'styled-components'

export const HomeWrapper = styled.div`
    /* border:10px solid grey; */
    grid-area:home;
    display:flex;
    flex-direction:column;  
    flex: 1;
    box-sizing:border-box;
    overflow-y:visible;
    /* overflow-y:hidden; */

    @media(min-width:968px){
        overflow-y:hidden;     
    }
`

export const HomeTitle = styled.h1`
    font-size:30px;
    margin: 16px;
`